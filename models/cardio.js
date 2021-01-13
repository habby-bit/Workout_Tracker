const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "What type of workout is this?"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter the workout name."
    },
    duration: {
        type: Number,
        required: "How long?"
    },
    distance: {
        type: Number,
        required: "How far?"
    },
    date: {
        type: Date,
        default: Date.now
      }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;