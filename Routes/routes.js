'use strict'
var cors = require('cors');

module.exports = function (app) {
    var category = require('../Controllers/category-controller');
    var expense = require('../Controllers/expense-controller');
    var budget = require('../Controllers/budget-controller')

    app.use(cors());

    app.route('/addCategory').post(category.addCategory);
    app.route('/getAllCategory').get(category.getAllCategory);
    app.route('/deleteCategory').post(category.deleteCategory);
    app.route('/addExpense').post(expense.addExpense);
    app.route('/getAllExpenses').get(expense.getAllExpenses);
    app.route('/updateExpense').post(expense.updateExpense);
    app.route('/deleteExpense').post(expense.deleteExpense);
    app.route('/undoDeleteExpense').post(expense.undoDeleteExpense);
    app.route('/addTotalBudget').post(budget.addTotalBudget);
    app.route('/getTotalBudget').get(budget.getTotalBudget);
    app.route('/updateTotalBudget').post(budget.updateTotalBudget);
}