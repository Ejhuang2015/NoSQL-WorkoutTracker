// Dependencies
// =============================================================
const router = require("express").Router();
const { Workout } = require("../models");

// API routes
// =============================================================
// Get last workout
router.get("/workouts", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Get all workouts
router.get("/workouts/range", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Create a new workout
router.post("/workouts", (req, res) => {
    Workout.create(req.body)
        .then((newWorkout) => {
            res.json(newWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Update a workout
router.put("/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { new: true }
    )
        .then((editWorkout) => {
            res.json(editWorkout)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
});

// Exports
// =============================================================
module.exports = router;