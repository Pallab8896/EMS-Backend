var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    categoryName: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    expenseDate: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model("Expense", ExpenseSchema);