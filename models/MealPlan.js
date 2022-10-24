const mongoose = require('mongoose')

const MealPlanSchema = new mongoose.Schema({
  mealType: {
    type: String,
    required: false
  },
  mealName: {
    type: String,
    required: false
  },
  calories: {
    type: Number,
    required: false
  },
  totalProtein: {
    type: Number,
    required: false
  },
  totalFat: {
    type: Number,
    required: false
  },
  totalCarbs: {
    type: Number,
    required: false
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('MealPlan', MealPlanSchema)
