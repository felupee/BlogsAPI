const { Category } = require('../models');

const getAll = async () => Category.findAll();

const createCategory = async (name) => {
    const category = await Category.create({ name });
    return category;
};

module.exports = {
    getAll,
    createCategory,
};