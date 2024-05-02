const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000
const path = require('path')
const fs = require('fs')

app.use(cors())

const dbRouter = require('./routes/dbdata')
const mailerRouter = require('./routes/mailer')
const itemsRouter = require('./routes/items')

app.use('/api/data', dbRouter)
app.use('/api', mailerRouter)
app.use('/api', itemsRouter)

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    const filepath = path.join(__dirname, 'build', 'index.html')
    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send("Error Reading File")
        }
        else {
            res.status(200).send(data)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})