const { CONFLICT, NOT_FOUND } = require('../statusCode');
const { User } = require('../models');
const generateToken = require('../utils/generateJWT');

const createUser = async (payload) => {
    const { email } = payload;
    const user = await User.findOne({ where: { email } });

    if (user) {
        const error = { status: CONFLICT, message: 'User already registered' };
        throw error;
    }
    const data = await User.create(payload);
    return generateToken(data);
};

const getAll = async () => User.findAll({ attributes: { exclude: ['password'] } });

const getById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) {
        const error = { status: NOT_FOUND, message: 'User does not exist' };
        throw error;
    }
    return user;
};

module.exports = {
    createUser,
    getAll,
    getById,
};