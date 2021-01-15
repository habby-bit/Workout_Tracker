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

workoutSchema.virtual('totalDuration').get(function () {
	return this.exercises.reduce((total, exercise) => {
		return total + exercise.duration;
	}, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const workoutSchema = new Schema(
// 	{
// 		day: {
// 			type: Date,
// 			default: () => new Date()
// 		},
// 		exercises: [
// 			{
// 				type: {
// 					type: String,
// 					trim: true,
// 					required: 'Enter an exercise type'
// 				},
// 				name: {
// 					type: String,
// 					trim: true,
// 					required: 'Enter an exercise name'
// 				},
// 				duration: {
// 					type: Number
// 				},
// 				distance: {
// 					type: Number
// 				},
// 				weight: {
// 					type: Number
// 				},
// 				reps: {
// 					type: Number
// 				},
// 				sets: {
// 					type: Number
// 				}
// 			}
// 		]
// 	},
// 	{
// 		toJSON: {
// 			virtuals: true
// 		}
// 	}
// );
// workoutSchema.virtual('totalDuration').get(function () {
// 	return this.exercises.reduce((total, exercise) => {
// 		return total + exercise.duration;
// 	}, 0);
// });

// const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
