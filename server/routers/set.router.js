const express = require('express');
const getDb = require('../database/bootstrap.database');

const setRouter = express.Router();

//works
setRouter.get('/:workoutId', (req,res) => {
    const id = req.params.workoutId;
    const db = getDb();
    db.READ.get_sets( [id] )
        .then( sets => res.status(200).send(sets))
        .catch( err => res.status(500).send(err))
});

//works
setRouter.post('/:workoutId/create', (req, res) => {
    const id = req.params.workoutId;
    const db = getDb();
    const { set } = req.body;
    db.CREATE.create_set([ id, set ])
        .then( (promise) => res.status(200).send(promise) )
        .catch( err => res.status(500).send(err) )
});

//works
setRouter.put('/:workoutId/update/:id', (req, res) => {
    const id = req.params.workoutId;
    const workout_id = req.params.id;
    const db = getDb();
    const { set } = req.body;
    db.UPDATE.update_set([ id, workout_id, set ])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err) )
});
//test doesnt work
// setRouter.delete('/delete/:id', (req, res) => {
//     const id = req.params.id;
//     const db = getDb();
//     db.DELETE.delete_set(id)
//         .then ( () => res.status(200).send() )
//         .catch( err => res.status(500).send(err) )
// });

module.exports = setRouter;