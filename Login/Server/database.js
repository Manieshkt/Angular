const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const conn = require('./db')

router.post('/signup', async (req, res) => {
    const { email, password } = req.body
    try {
        const hashedPassword =await bcrypt.hash(password, 10)

        const sql = 'insert into Users(Email,Password) values(?,?)'
        conn.query(sql, [email, hashedPassword], (err, data) => {
            if (err) {
                console.error('Error inserting data:', err)
                res.status(500).json({ error: 'Error inserting datas' })
            }
            else {
                console.log('Data inserted successfully')
                res.status(201).json({ message: 'Data inserted Successfully' })
            }
        })
    }
    catch (err) {
        console.log("Error hashing password", err)
        res.status(500).json({ error: 'Error Hashing password' })
    }
})

router.get('/Home', (req, res) => {
    const sql = 'select * from Users'
    conn.query(sql, (err, data) => {
        if (err) {
            console.log("Error Fetching data", err)
            res.status(500).json({ error: "Error fetching data" })
        }
        else {
            console.log("Data fetching successfull")
            res.status(200).send(data)
        }
    })
})

router.post('/login', async(req, res) => {
    const { email, password } = req.body
    const sql = 'select * from Users where Email=?'
    conn.query(sql, [email], async(err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ message: 'Error querying database' });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = results[0];
        const passwordMatch=await bcrypt.compare(password,user.Password)
        if(!passwordMatch){
            res.status(401).json({error:"Invaild Mail or Password"})
        }
        const token = jwt.sign({ email: user.Email }, 'your_secret_key');
        res.json(token);
    })
})

module.exports = router