const express = require('express');
const getDb = require('../database/bootstrap.database');

const weekRouter = express.Router();
//test works
weekRouter.get('/:projectId', (req, res) => {
    const id = req.params.projectId;
    const db = getDb();
    db.READ.get_week( [id] )
        .then( week => res.status(200).send(week))
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
weekRouter.post('/create', (req, res) => {
    const db = getDb();
    const { user_id, name, date } = req.body;
    db.CREATE.create_project([ user_id, name, date ])
        .then( (promise) => res.status(200).send(promise) )
        .catch( err => res.status(500).send(err) )
});
//test works
weekRouter.put('/update/:id', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const { user_id, name, date } = req.body;
    db.UPDATE.update_project([ id, user_id, name, date ])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err) )
});
//NOT WORKING YET
//need to set all associated li_profiles to user 1 = me
weekRouter.put('/delete/:id', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    db.DELETE.delete_cards(id)
        .then ( () => res.status(200).send() )
        .catch( err => res.status(500).send(err) )
        return db.DELETE.delete_project(id)
            .then ( () => res.status(200).send() )
            .catch( err => res.status(500).send(err) )
});

module.exports = weekRouter;