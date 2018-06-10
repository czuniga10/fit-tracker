const express = require('express');
const getDb = require('../database/bootstrap.database');

const userRouter = express.Router();
//test worked
userRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    db.READ.get_user( [id] )
        .then( user => res.status(200).send(user))
        .catch( err => res.status(500).send(err))
});

userRouter.get('/:email', (req, res) => {
    const db = getDb();
    const email = req.params.email;
    // const {email} = req.body;
    db.READ.get_user_by_email( [email] )
        .then( user => res.status(200).send(user))
        .catch( err => res.status(500).send(err))
});
//test worked
userRouter.post('/register', (req, res) => {
    const db = getDb();
    const { username, first_name, last_name, email, password } = req.body;
    db.CREATE.create_user([ username, first_name, last_name, email, password ])
        .then( (user) => res.status(200).send(user))
        .catch( err => res.status(500).send(err))
});
//test worked
userRouter.put('/update/:id', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const { username, first_name, last_name, email, password } = req.body;
    db.UPDATE.update_user([id, username, first_name, last_name, email, password])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err) )
});
//test worked
userRouter.delete('/delete/:id', (req, res) => { 
    const id = req.params.id;   
    const db = getDb();
    db.DELETE.delete_user(req.params.id)
        .then( () => res.status(200).send() )
        .catch( err => res.status(500).send(err) )
});

module.exports = userRouter;