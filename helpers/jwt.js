const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

function sign(payload) {
  const token = jwt.sign(payload, SECRET_KEY);
  return token;
}

function verify(token) {
  const decoded = jwt.verify(token, SECRET_KEY);
  return decoded;
}

module.exports = { sign, verify };