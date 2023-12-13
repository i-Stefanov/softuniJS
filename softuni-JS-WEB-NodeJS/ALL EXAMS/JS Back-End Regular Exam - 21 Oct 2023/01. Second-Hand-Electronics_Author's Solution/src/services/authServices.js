const jwt = require('../utils/jwt');
const User = require('../models/User');
const { JWT_Secret } = require('../constants');

exports.register = (userData) => User.create(userData);

exports.login = async ({ email, password }) => {
    let user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password');
    };

    let isValid = await user.validatePassword(password);

    if (!isValid) {
        throw new Error('Invalid email or password');
    }

    let payload = {
        _id: user._id,
        email: user.email,
        name: user.username,
    }

    let token = await jwt.sign(payload, JWT_Secret);

    return token;
}