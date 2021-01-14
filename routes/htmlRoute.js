const router = require("express").Router();
const Workout = require("../models/workout.js");

    // Returns the content from the notes.html file
    router.get("/workouts", function (req, res) {
        res.sendFile(Workout.join(__dirname, "../public/exercise.html"));
    });

    router.get("/stats", function (req, res) {
        res.sendFile(Workout.join(__dirname, "../public/stats.html"));
    });

    // Returns the content from the index.html file
    router.get("*", function (req, res) {
        res.sendFile(Workout.join(__dirname, "../public/index.html"));
    });

module.exports = router;

