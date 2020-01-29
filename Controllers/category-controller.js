const mongoose = require('mongoose');
const Category = require('../Models/category-model');

exports.addCategory = function (req, res) {
    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        categoryName: req.body.categoryName,
    });
    category.save((err, category) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        }
        return res.status(200).send({
            message: 'Category added successfully'
        });
    })
}

exports.getAllCategory = function (req, res) {
    Category.find({}, (err, categories) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        }
        return res.status(200).json({
            allCategories: categories
        });
    });
}

exports.deleteCategory = function (req, res) {
    Category.deleteOne({ _id: req.body._id }, (err, category) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            return res.status(200).send({
                message: 'Category deleted successfully'
            });
        }
    })
}