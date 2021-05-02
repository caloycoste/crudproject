const express = require('express')
const Character = require('../db/schema')

const router = express.Router()

//Get full list of data
router.get('/', async (req, res) => {
    try {
        const characters = await Character.find()
        res.json(characters)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get single data by id
router.get('/:id', async (req, res) => {
    try {
        const match = await Character.findById(req.params.id)
        if (match === null) {
            res.status(404).json({ message: 'Error 404: Character not found.' })
        } else {
            res.json(match)
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Create new data and add to list
router.post('/', async (req, res) => {
    const character = new Character({
        ...req.body
    })
    try {
        const newCharacter = await character.save()
        res.status(201).json(newCharacter)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Update data by id
router.put('/:id', async (req, res) => {
    const match = await Character.findById(req.params.id)
    if (match) {
        match.name = req.body.name ? req.body.name : match.name
        match.desc = req.body.desc ? req.body.desc : match.desc
        match.status = req.body.status ? req.body.status : match.status
    }
    else {
        res.status(404).json({ msg: 'Character not found.' })
    }
    try {
        const updatedCharacter = await match.save()
        res.json(updatedCharacter)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete from a list of data
router.delete('/:id', async (req, res) => {
    try {
        const match = await Character.findById(req.params.id)
        match.remove()
        res.json({ message: 'Character deleted' })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router