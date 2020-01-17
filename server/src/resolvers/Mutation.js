const bcrypt = require("bcryptjs");
const validateEmail = require("../Utills/validateEmail");
const GenUserTokenwithCookies = require("../Utills/GenerateJwt");
const {
  resetPasswordToken,
  validateEmailToken
} = require("../Utills/GenCryptoToken");
const { sendForgetPassword, sendWelcomeEmail } = require("../Utills/SendMail");
const Hash = require("../Utills/HashPassword");
const isAdmin = require("../Utills/isAdmin");

const mutations = {
  async createUser(parent, args, ctx, info) {
    ctx.response.clearCookie("Token");
    // check if email is valid
    const email = args.email.toLowerCase();
    // lowercase email
    const ValidEmail = validateEmail(email);
    if (!ValidEmail) throw new Error(`The Email Address ${email} is Not Valid`);
    // check if password is valid
    if (args.password.length < 4) throw new Error("Password is Too Short");
    // check if user already registerd
    const alreadyExist = await ctx.prisma.query.user(
      {
        where: {
          email: email
        }
      },
      info
    );

    if (alreadyExist) throw new Error(`User With This Email Already Exists`);
    // hash password
    const hashedPassword = await bcrypt.hash(args.password, 10);
    // create new user
    const NewUser = await ctx.prisma.mutation.createUser({
      data: {
        ...args,
        email: email,
        password: hashedPassword,
        permissions: {
          set: email === "imran.ib@live.com" ? ["ADMIN"] : ["USER"]
        }
      }
    });
    // genrate Token
    GenUserTokenwithCookies(NewUser.id, ctx.response);
    //log the user in
    sendWelcomeEmail(NewUser, ctx);

    return NewUser;
  },
  async loginUser(parent, args, ctx, info) {
    ctx.response.clearCookie("Token");
    // check if user is legit
    const user = await ctx.prisma.query.user(
      {
        where: {
          email: args.email
        }
      },
      `{id name email password}`
    );
    if (!user)
      throw new Error(
        `No User Rigistred with email ${args.email.toLowerCase()}`
      );
    // check if password is correct
    const validPassword = await bcrypt.compare(args.password, user.password);
    if (!validPassword) throw new Error(`Wrong Password`);
    GenUserTokenwithCookies(user.id, ctx.response);
    return user;
  },
  async logoutUser(parent, args, ctx, info) {
    ctx.response.clearCookie("Token");
    return { message: "Goodbye!" };
  },
  async requestReset(parent, args, ctx, info) {
    ctx.response.clearCookie("Token");
    // check if there is user registred with that email
    const user = await ctx.prisma.query.user({
      where: { email: args.email }
    });
    if (!user) throw new Error("No User Found With that Email Address");
    // generate Token
    const token = resetPasswordToken();
    // const resetPasswordExpires = new Date().getTime() + 1000 * 60 * 60 * 5; // 5 hours
    const resetPasswordExpires = Date.now() + 1800000; // half an hour
    const updatedUser = await ctx.prisma.mutation.updateUser(
      {
        where: { email: args.email },
        data: {
          resetToken: token,
          resetTokenExpiry: resetPasswordExpires
        }
      },
      info
    );
    // Send Email
    sendForgetPassword(token, user, ctx);

    return {
      message: "Reset Token is Generated and sent to your email address"
    };
  },
  async resetPassword(parent, args, ctx, info) {
    ctx.response.clearCookie("Token");
    // check if there is any token clear it
    if (!args.token) throw new Error("Where is Your Token ????");
    //check if token is valid
    const [user] = await ctx.prisma.query.users({
      where: {
        resetToken: args.token,
        resetTokenExpiry_gte: Date.now() - 1800000
      }
    });
    if (!user) throw new Error("Your Token is Either Invalid Or Expire");
    // check if password match

    if (args.password !== args.confirmPassword)
      throw new Error("Your Password Do Not Match");
    // hash password
    const hashedPassword = await Hash(args.password);
    // save new password
    // remove reset token and reset token expiry
    const updatedUser = await ctx.prisma.mutation.updateUser(
      {
        where: {
          id: user.id
        },
        data: {
          password: hashedPassword,
          resetToken: null,
          resetTokenExpiry: null
        }
      },
      info
    );
    // log user in
    GenUserTokenwithCookies(updatedUser.id, ctx.response);
    return updatedUser;
  }
};

module.exports = mutations;
