const mongoose = require("mongoose");
const CategorySchema = require('../../schema/category/category');
const Category = mongoose.model('category', CategorySchema);

getAllCategories = () => {
    return Category.find();
};

createCategory = (category, adminId) => {
    return Category.create({
        categoryName: category.categoryName,
        createdBy: adminId,

    });
};

updateCategory = (category, adminId) => {
    return Category.create({
        categoryName: category.categoryName,
        updatedByBy: adminId,
    }).where('id').equals(category.id);
};
module.exports = {
    createCategory,
    updateCategory,
    getAllCategories
}