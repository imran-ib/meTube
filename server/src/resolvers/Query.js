const { forwardTo } = require("prisma-binding");
const isAdmin = require("../Utills/isAdmin");

const Query = {
  async me(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) return null;
    const user = await ctx.prisma.query.user(
      {
        where: { id: userId }
      },
      info
    );
    return user;
  },
  async admin(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) return null;

    const user = await ctx.prisma.query.user(
      {
        where: { id: userId }
      },
      info
    );
    const admin = user.permissions.includes("ADMIN");
    console.log(admin);
    if (admin) {
      return user;
    } else {
      return null;
    }
  }
};
module.exports = Query;
