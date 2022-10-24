const mongoose = require('mongoose')

const WorkoutLogSchema = new mongoose.Schema({
  workoutMuscle: {
    type: String,
    required: true,
  },
  workoutExercise: {
    type: [String],
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('WorkoutLog', WorkoutLogSchema)
