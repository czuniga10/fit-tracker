const express = require('express');
const getDb = require('../database/bootstrap.database');

const weekRouter = express.Router();
//test works
// weekRouter.get('/:projectId', (req, res) => {
//     const id = req.params.projectId;
//     const db = getDb();
//     db.READ.get_week( [id] )
//         .then( week => res.status(200).send(week))
//         .catch( err => res.status(500).send(err))
// });
//get days
weekRouter.get('/:projectId', (req,res) => {
    const id = req.params.projectId;
    const db = getDb();
    db.READ.get_days( [id] )
        .then( days => res.status(200).send(days))
        .catch( err => res.status(500).send(err))
});

//test works
weekRouter.get('/:projectId/:dayId', (req, res) => {
    const id = req.params.projectId;
    const dayId = req.params.dayId
    const db = getDb();
    db.READ.get_week_by_day( [id, dayId] )
        .then( day => res.status(200).send(day))
        .catch( err => res.status(500).send(err))
});

weekRouter.get('/:projectId/:dayId/:focusId', (req, res) => {
    const id = req.params.projectId;
    const dayId = req.params.dayId;
    const focusId = req.params.focusId;
    const db = getDb();
    db.READ.get_week_by_focus( [id, dayId, focusId] )
        .then( focus => res.status(200).send(focus))
        .catch( err => res.status(500).send(err))
});
//test works
weekRouter.post('/:projectId/:dayId/:focusId/create', (req, res) => {
    const id = req.params.projectId;
    const dayId = req.params.dayId;
    const focusId = req.params.focusId;
    const db = getDb();
    const { lift, reps, weight, is_completed } = req.body;
    db.CREATE.create_lift([ id, dayId, focusId, lift, reps, weight, is_completed ])
        .then( (promise) => res.status(200).send(promise) )
        .catch( err => res.status(500).send(err) )
});
//test works
weekRouter.put('/:projectId/:dayId/:focusId/update/:liftId', (req, res) => {
    const liftId = req.params.liftId;
    const id = req.params.projectId;
    const dayId = req.params.dayId;
    const focusId = req.params.focusId;
    const db = getDb();
    const { lift, reps, weight, is_completed } = req.body;
    db.UPDATE.update_lift([ liftId, id, dayId, focusId, lift, reps, weight, is_completed ])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err) )
});
//test works
weekRouter.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    db.DELETE.delete_lift(id)
        .then ( () => res.status(200).send() )
        .catch( err => res.status(500).send(err) )
});

module.exports = weekRouter;