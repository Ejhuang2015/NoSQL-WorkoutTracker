// Dependencies
// =============================================================
const router = require("express").Router();
const { Workout } = require("../models");

// API routes
// =============================================================
// Get all workouts
router.get("/api/workout", (req, res) => {
    try {
        Workout.find({})
            .sort({ date: -1 })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    } catch (err) {
        res.status(400).json(err);
    }
});

// Create a new workout
router.post("/api/workout", (req, res) => {
    try {
        Workout.create(req.body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a workout
router.put("/api/workout/:id", (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        Workout.updateOne(
            { id: id },
            {
                $push: {
                    exercises: { ...body }
                },
            }
        ).then((dbWorkout) => {
            res.status(200).json(dbWorkout);
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

// Exports
// =============================================================
module.exports = router;