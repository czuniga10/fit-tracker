const express = require('express');
const getDb = require('../database/bootstrap.database');

const projectRouter = express.Router();
//test works
projectRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    db.READ.get_projects( [id] )
        .then( projects => res.status(200).send(projects))
        .catch( err => res.status(500).send(err))
});
//test works
projectRouter.get('/:id/:projectId', (req, res) => {
    const id = req.params.id;
    const projectId = req.params.projectId
    const db = getDb();
    db.READ.get_project_by_id( [id, projectId] )
        .then( project => res.status(200).send(project))
        .catch( err => res.status(500).send(err))
});
//test works
projectRouter.post('/create', (req, res) => {
    const db = getDb();
    const { user_id, name, details } = req.body;
    db.CREATE.create_project([ user_id, name, details ])
        .then( (promise) => res.status(200).send(promise) )
        .catch( err => res.status(500).send(err) )
});
//test works
projectRouter.put('/update', (req, res) => {
    const db = getDb();
    const { id, user_id, name, details } = req.body;
    db.UPDATE.update_project([ id, user_id, name, details ])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err) )
});
//test works
projectRouter.delete('/delete/:id', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    db.DELETE.delete_project(id)
        .then ( () => res.status(200).send() )
        .catch( err => res.status(500).send(err) )
});

module.exports = projectRouter;