const express = require('express')
const data = require('../sample-data/data')
const uuid = require('uuid')

const router = express.Router()

//Get full list of data
router.get('/', (req, res) => {
    res.json(data)
})

//Get single data by id
router.get('/:id', (req, res) => {
    const match = data.find(item => item.id === parseInt(req.params.id))
    if (match) {
        res.json(data.filter(item => item.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: 'Character not found.' })
    }
})

//Create new data and add to list
router.post('/', (req, res) => {
    const newData = {
        id: uuid.v4(),
        name: req.body.name,
        desc: req.body.desc,
        status: req.body.status,
        // ...req.body
    }
    data.push(newData)
    res.json(data)
    // res.redirect('/')
})

//Update data by id
router.put('/:id', (req, res) => {
    const match = data.find(item => item.id === parseInt(req.params.id))
    if (match) {
        data.forEach(item => {
            if (item.id === parseInt(req.params.id)) {
                item.name = req.body.name ? req.body.name : item.name
                item.desc = req.body.desc ? req.body.desc : item.desc
                item.status = req.body.status ? req.body.status : item.status

                res.json(item)
            }
        })
    } else {
        res.status(400).json({ msg: 'Character not found.' })
    }
})

//Delete from a list of data
router.delete('/:id', (req, res) => {
    const match = data.find(item => item.id === parseInt(req.params.id))
    if (match) {
        res.json(data.filter(item => item.id !== parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: 'Character not found.' })
    }
})

module.exports = router