const express = require('express')
const router = express.Router()
const conn = require('./db');

router.get('/', (req, res) => {
    conn.query('select * from Salary', (err, data) => {
        if (err) {
            console.log('error')
            res.status(500).json({ error: 'Error fetching data' })
        }
        else {
            console.log(data)
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(data)
        }
    })
})

router.post('/', (req, res) => {
    conn.query('insert into Salary (id ,name,salary) values (109,"Clark",35000)', (err, data) => {
        if (err) {
            console.log("Error patching", err)
            res.status(500).json({ err: "Error" })
        }
        else {
            res.status(201).json(data)
        }
    })
})

module.exports = router