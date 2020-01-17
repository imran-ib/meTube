function WelcomeMessage(user, ctx) {
  return `
  <div>Hello Mr.${user.name.toUpperCase()}</div>
  <div>Welcome in My Portfolio App.</div>
    <div>Please find link to validate your email.
       ${process.env.FRONTEND_URL}/validateEmail?validateEmailToken=${
    user.validateEmailToken
  }
    </div>
  `;
}

function PasswordResetLink(token, user, ctx) {
  return `
    <div>hello</div>
    <div>Please find link to reset your password.
    <a href="${process.env.FRONTEND_URL}/user-reset-password?token=${token}">Click Here </a>
    </div>
  `;
}

module.exports = {
  WelcomeMessage,
  PasswordResetLink
};
