const nodemailer = require("nodemailer");
const { WelcomeMessage, PasswordResetLink } = require("./Mailtemplates");

module.exports = {
  async sendWelcomeEmail(user, ctx) {
    const mailer = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASS
      }
    });

    const mailOptions = {
      to: user.email,
      from: "naperg@imran-irshad.io",
      subject: "Welcome To My Website",
      html: WelcomeMessage(user, ctx)
    };
    return mailer.sendMail(mailOptions);
  },
  sendForgetPassword(token, user, ctx) {
    const mailer = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASS
      }
    });

    var mailOptions = {
      to: user.email,
      from: "naperg@imran-irshad.io",
      subject: "Forget Password - Imran Irshad Portfolio APP",
      html: PasswordResetLink(token, user, ctx)
    };
    mailer.sendMail(mailOptions, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Mail sent to: " + email);
      }
    });
  }
};
