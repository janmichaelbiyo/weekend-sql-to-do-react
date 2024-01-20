const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

router.get('/', (req, res) => {
     const todoQuery = `SELECT * FROM "todo";`;

     pool.query(todoQuery)
         .then((result) => {
            console.log('this is my get result', result);
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

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const todoData = req.body;
    const queryTodoUpdate = `UPDATE "todo" SET "is_complete" = TRUE;`;

    pool
        .query(queryTodoUpdate, [todoData.is_complete, id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('whats going on', error);

            res.sendStatus(500);
        })

})


// DELETE

router.delete('/:id', (req,res) => {
    const todoId = req.params.id;
    const queryDeleteTodo = `DELETE FROM "todo" WHERE "id" = $1;`;

    pool    
        .query(queryDeleteTodo, [todoId])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('fix me now dude', error);

            res.sendStatus(500);
        })
})

module.exports = router;
