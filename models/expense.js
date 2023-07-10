const mongoose = require ('./connection.js')
const { Schema, model } = mongoose;

const expensesSchema = new Schema({
  title: String,
  category: String,
  amount: Number,
  date: String,
  receipt: String,
  description: String,
  username: String,
});
const Expense = model ('Expense', expensesSchema)
module.exports = Expense