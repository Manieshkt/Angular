const express = require('express')
const router = express.Router()

const items = [{
    id: 0,
    product: 'Mobile',
    price: 1000
},
{
    id: 1,
    product: 'Laptop',
    price: 2000
}]

router.get('/items', (req, res) => {
    res.send(items)
})

module.exports = router