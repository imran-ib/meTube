const crypto = require("crypto");

function resetPasswordToken() {
  return crypto.randomBytes(64).toString("hex");
}
function validateEmailToken() {
  return crypto.randomBytes(64).toString("hex");
}

module.exports = {
  resetPasswordToken,
  validateEmailToken
};
