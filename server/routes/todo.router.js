const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

router.get('/', (req, res) => {
     const todoQuery = 'SELECT * FROM "todo";';

     pool
        .query(todoQuery)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('this is it stop', error);

            res.sendStatus(500);
        })
});


// POST

router.post('/', (req, res) => {
    const newTodo = req.body;
    const todoQuery = `INSERT INTO "todo" ("task")
    VALUES
    ($1);`;
        const queryResult = [
            newTodo.task,
        ];

        pool    
            .query(todoQuery, queryResult)
            .then((result) => {
                res.sendStatus(201);
            })
            .catch((error)=> {
                console.log('time to find out', error)
            });
})

// PUT

// DELETE

module.exports = router;
