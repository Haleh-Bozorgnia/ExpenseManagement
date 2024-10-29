const mongoose = require ('./connection')
const { Schema, model } = mongoose;

const expensesSchema = new Schema({
  title: String,
  category: [String],
  amount: {
    type: Number,
    precision:2
  },
  date: String,
  receipt: String,
  description: String,
  username: String,
 
});
const Expense = model("expense", expensesSchema);
module.exports = Expense