const { app } = require('egg-mock/bootstrap');
const jwt = require('jsonwebtoken');


function getJWTPayload(token) {
  // 验证并解析JWT
  return jwt.verify(token.split(' ')[1], app.config.keys);
}

function getToken(payload = {}) {
  return jwt.sign(payload, app.config.keys, { expiresIn: '4h' });
}

module.exports = {
  getJWTPayload,
  getToken,
};
