const express = require('express');
const getDb = require('../database/bootstrap.database');

const weekRouter = express.Router();
//test works
weekRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    db.READ.get_weeks( [id] )
        .then( projects => res.status(200).send(projects))
        .catch( err => res.status(500).send(err))
});
//test works
weekRouter.get('/:id/:projectId', (req, res) => {
    const id = req.params.id;
    const projectId = req.params.projectId
    const db = getDb();
    db.READ.get_user_project( [id, projectId] )
        .then( project => res.status(200).send(project))
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