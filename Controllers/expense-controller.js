const mongoose = require('mongoose');
const Expense = require('../Models/expense-model');

exports.addExpense = function (req, res) {
    const expense = new Expense({
        _id: new mongoose.Types.ObjectId(),
        categoryName: req.body.categoryName,
        itemName: req.body.itemName,
        amount: req.body.amount,
        expenseDate: req.body.expenseDate,
    });
    expense.save((err, expense) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        }
        return res.status(200).send({
            message: 'Expense added successfully'
        });
    });
}

exports.getAllExpenses = function (req, res) {
    Expense.find({}, (err, expenses) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        }
        return res.status(200).json({
            allExpenses: expenses
        });
    });
}

exports.updateExpense = function (req, res) {
    Expense.findOne({ _id: req.body._id }, (err, expense) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            expense.categoryName = req.body.categoryName;
            expense.itemName = req.body.itemName;
            expense.amount = req.body.amount;
            expense.expenseDate = req.body.expenseDate;
            expense.save((err, updatedExpense) => {
                if (err) {
                    return res.status(400).send({
                        message: err
                    });
                }
                return res.status(200).send({
                    message: 'Update successful'
                });
            })
        }
    });
}

exports.deleteExpense = function (req, res) {
    Expense.findOne({ _id: req.body._id }, (err, expense) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            expense.isDeleted = true;
            expense.save((err, updatedExpense) => {
                if (err) {
                    return res.status(400).send({
                        message: err
                    });
                }
                return res.status(200).send({
                    message: 'Delete successful'
                });
            })
        }
    });
}

exports.undoDeleteExpense = function (req, res) {
    Expense.findOne({ _id: req.body._id }, (err, expense) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            expense.isDeleted = false;
            expense.save((err, updatedExpense) => {
                if (err) {
                    return res.status(400).send({
                        message: err
                    });
                }
                return res.status(200).send({
                    message: 'Undo delete successful'
                });
            })
        }
    });
}

