const express = require('express');
const getDb = require('../database/bootstrap.database');

const workoutRouter = express.Router();

//works
workoutRouter.get('/:projectId', (req,res) => {
    const id = req.params.projectId;
    const db = getDb();
    db.READ.get_workouts( [id] )
        .then( workouts => res.status(200).send(workouts))
        .catch( err => res.status(500).send(err))
});

//works
workoutRouter.post('/create', (req, res) => {
    const db = getDb();
    const { project_id, name, date, time } = req.body;
    db.CREATE.create_workout([ project_id, name, date, time ])
        .then( (promise) => res.status(200).send(promise) )
        .catch( err => res.status(500).send(err) )
});

//works
workoutRouter.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    const { name, date, time } = req.body;
    db.UPDATE.update_workout([ id, name, date, time ])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err) )
});
//test doesn't work
// workoutRouter.delete('/delete/:id', (req, res) => {
//     const id = req.params.id;
//     const db = getDb();
//     db.DELETE.delete_workout(id)
//         .then ( () => res.status(200).send() )
//         .catch( err => res.status(500).send(err) )
// });

module.exports = workoutRouter;