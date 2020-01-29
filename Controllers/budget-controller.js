const mongoose = require('mongoose');
const Budget = require('../Models/budget-model');

exports.addTotalBudget = function (req, res) {
    const budget = new Category({
        _id: new mongoose.Types.ObjectId(),
        totalBudget: req.body.totalBudget,
    });
    budget.save((err, budget) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        }
        return res.status(200).send({
            message: 'Total budget added successfully'
        });
    })
}

exports.updateTotalBudget = function (req, res) {
    Budget.findOne({ _id: req.body._id }, (err, budget) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            budget.totalBudget = req.body.totalBudget;
            budget.save((err, updatedBudget) => {
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