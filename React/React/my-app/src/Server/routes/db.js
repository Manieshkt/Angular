const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Salary'
})

conn.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    }
    else {
        console.log('Connected to MySQL Database')
    }
})

module.exports = conn