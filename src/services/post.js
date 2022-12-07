const { BlogPost, Category, PostCategory } = require('../models');
const { BAD_REQUEST } = require('../statusCode');

const createPost = async ({ userId, title, content, categoryIds }) => {
    const category = await Promise.all(categoryIds.map((id) => Category.findByPk(id)));
    const isnull = category.some((e) => e === null);
    if (isnull) {
        const error = { status: BAD_REQUEST, message: 'one or more "categoryIds" not found' };
        throw error;
    }

    const arrayFilter = category.filter((e) => e !== null);
    const newPost = await BlogPost.create({ title, content, userId });
    
    const postCategories = arrayFilter.map((e) => ({
        categoryId: e.dataValues.id, postId: newPost.dataValues.id,
    }));

    await PostCategory.bulkCreate(postCategories);

    return newPost;
};

module.exports = {
    createPost,
};