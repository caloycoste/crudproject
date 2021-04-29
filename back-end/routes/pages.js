const express = require('express')
const router = express.Router()
const data = require('../sample-data/data')

router.get('/', (req, res) => {
    res.render('index', {title: 'Marvel API', data}) //(file, any object to display)
})

module.exports = router