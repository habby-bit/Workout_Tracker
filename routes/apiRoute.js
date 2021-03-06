const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post('/api/workouts', (req, res) => {
	Workout.create({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get('/api/workouts', (req, res) => {
	Workout.find({})
		.limit(5)
		.then((dbWorkouts) => {
			res.json(dbWorkouts);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get('/api/workouts/range', ({ query }, res) => {
	Workout.find({ day: { $gte: query.start, $lte: query.end } })
		.then((dbWorkouts) => {
			res.json(dbWorkouts);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, 
    { $push: { exercises: body } }, 
    { new: true, runValidators: true }
    )
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;