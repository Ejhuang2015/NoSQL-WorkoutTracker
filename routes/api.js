// Dependencies
// =============================================================
const router = require("express").Router();
const { Workout } = require("../models");

// API routes
// =============================================================
// Get all workouts
router.get("/api/workouts", async (req, res) => {
    try {
        await Workout.find({})
            .sort({ date: -1 })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get all workouts in range?
router.get("/api/workouts/range", async (req, res) => {
    try {
        await Workout.find({})
            .sort({ date: -1 })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    } catch (err) {
        res.status(400).json(err);
    }
});

// Create a new workout
router.post("/api/workouts", async (req, res) => {
    try {
        await Workout.create(req.body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a workout
router.put("/api/workouts/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        await Workout.updateOne(
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