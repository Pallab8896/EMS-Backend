var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BudgetSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    totalBudget: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model("Budget", BudgetSchema);