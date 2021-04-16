// Dependencies
// =============================================================
const router = require("express").Router();
const db = require("../models");

// API routes
// =============================================================
// Get last workout
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Get all workouts
router.get("/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


// Create a new workout
router.post("/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Update a workout
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } }
    )
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
});

// Exports
// =============================================================
module.exports = router;