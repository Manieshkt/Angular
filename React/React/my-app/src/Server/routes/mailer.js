const nodemailer = require('nodemailer')
const express = require('express')
const router = express.Router()
const conn = require('./db')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'manieshkt@gmail.com',
        pass: 'plzv zuxs blll zeoe'
    }
})

router.post('/sendmail', (req, res) => {
    conn.query('select * from Salary', (err, data) => {
        if (err) {
            console.log('No data')
            res.status(500).json({ error: 'No data' })
        }
        else {
            let tableRows = '';
            data.map(row => {
                tableRows += `<tr><td>${row.id}</td><td>${row.name}</td><td>${row.salary}</td></tr>`;
            });
            const mailOptions = {
                from: 'manieshkt@gmail.com',
                to: 'maniesh037@gmail.com',
                subject: 'Mail Using Express.js',
                // text: JSON.stringify(data)
                html: `<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>${tableRows}</table>`

            }
            transporter.sendMail(mailOptions, ((err, data) => {
                if (err) {
                    console.log('Error sending mail')
                    res.status(500).json({ error: "Error Sending Mail" })
                }
                else {
                    console.log('Mail Sent', info)
                    res.status(200).json({ message: "Mail sent Successfully" })
                }
            }))
        }
    })
})

module.exports = router