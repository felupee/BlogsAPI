const { CREATED } = require('../statusCode');
const services = require('../services/post');

const createPost = async (req, res) => {
    const { id } = req.user.data;
    req.body = { userId: id, ...req.body };
    const newPost = await services.createPost(req.body);
    return res.status(CREATED).json(newPost);
};

module.exports = {
    createPost,
};