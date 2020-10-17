const categoryModel = require("../models/category/category");

exports.getAllCategories = async (req, res) => {
    const categories = await categoryModel.getAllCategories();
    return res.status(200).json({ categories: categories });
}

exports.updateCategory = (req, res) => {
    
}

exports.deleteCategory = (req, res) => {
    
}