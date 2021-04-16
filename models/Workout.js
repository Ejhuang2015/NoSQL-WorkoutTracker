// Dependencies
// =============================================================
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Model
// =============================================================
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter the workout type."
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter the workout name."
      },
      duration: {
        type: Number,
        trim: true,
        required: "Please enter the duration."
      },
      weight: {
        type: Number,
        trim: true,

      },
      reps: {
        type: Number,
        trim: true
      },
      sets: {
        type: Number,
        trim: true
      },
      distance: {
        type: Number,
        trim: true
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

// Export
// =============================================================
module.exports = Workout;
