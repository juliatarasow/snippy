const JWT = require('jsonwebtoken');

exports.generateToken = (user) => {
    return JWT.sign({sub: user._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
}