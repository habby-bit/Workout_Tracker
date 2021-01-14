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
        distance: {
        type: Number,
        required: "How far?"
    },
    duration: {
        type: Number,
        required: "How long?"
    },
    weight: {
        type: Number,
        required: "What weight?"
    },
    reps: {
        type: Number,
        required: "How many reps?"
    },
    sets: {
        type: Number,
        required: "How many sets?"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

