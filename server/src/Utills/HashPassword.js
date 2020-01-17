const bcrypt = require("bcryptjs");

const Hash = async password => {
  return await bcrypt.hash(password, 10);
};

module.exports = Hash;
