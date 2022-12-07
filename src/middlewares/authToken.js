require('dotenv').config();
const JWT = require('jsonwebtoken');
const { UNAUTHORIZED } = require('../statusCode');

const { JWT_SECRET } = process.env;

module.exports = (req, _res, next) => {
    const token = req.headers.authorization;
    if (!token) next({ status: UNAUTHORIZED, message: 'Token not found' });
    const user = JWT.verify(token, JWT_SECRET);
    req.user = user;

    next();
};