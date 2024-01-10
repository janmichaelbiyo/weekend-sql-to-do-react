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

// PUT

// DELETE

module.exports = router;
