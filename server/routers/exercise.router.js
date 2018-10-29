const express = require('express');
const getDb = require('../database/bootstrap.database');

const exerciseRouter = express.Router();

//works
exerciseRouter.get('/:workoutId', (req,res) => {
    const id = req.params.workoutId;
    const db = getDb();
    db.READ.get_exercises( [id] )
        .then( exercises => res.status(200).send(exercises))
        .catch( err => res.status(500).send(err))
});

//works
exerciseRouter.post('/create', (req, res) => {
    const db = getDb();
    const { workout_id, exercise } = req.body;
    db.CREATE.create_exercise([ workout_id, exercise ])
        .then( (promise) => res.status(200).send(promise) )
        .catch( err => res.status(500).send(err) )
});

//works
exerciseRouter.put('/update', (req, res) => {
    const db = getDb();
    const { exercise_id, ex } = req.body;
    db.UPDATE.update_exercise([ exercise_id, ex ])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err) )
});
//test doesnt work
exerciseRouter.delete('/delete', (req, res) => {
    const {id} = req.body;
    const db = getDb();
    db.DELETE.delete_exercise([id])
        .then ( () => res.status(200).send() )
        .catch( err => res.status(500).send(err) )
});

module.exports = exerciseRouter;