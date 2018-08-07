const express = require('express');
const getDb = require('../database/bootstrap.database');

const setRouter = express.Router();

//works
setRouter.get('/:exerciseId', (req,res) => {
    const id = req.params.exerciseId;
    const db = getDb();
    db.READ.get_sets( [id] )
        .then( sets => res.status(200).send(sets))
        .catch( err => res.status(500).send(err))
});

//works
setRouter.post('/:exerciseId/create', (req, res) => {
    const id = req.params.exerciseId;
    const db = getDb();
    const { type, reps, weight, is_completed } = req.body;
    db.CREATE.create_set([ id, type, reps, weight, is_completed ])
        .then( (promise) => res.status(200).send(promise) )
        .catch( err => res.status(500).send(err) )
});

//works
setRouter.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    const { type, reps, weight, is_completed } = req.body;
    db.UPDATE.update_set([ id, type, reps, weight, is_completed ])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err) )
});
//works
setRouter.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    db.DELETE.delete_set(id)
        .then ( () => res.status(200).send() )
        .catch( err => res.status(500).send(err) )
});

module.exports = setRouter;