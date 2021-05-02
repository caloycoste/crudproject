const mongoose = require('mongoose')
const Schema = mongoose.Schema

const charSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    desc: {
        type: String,
    },

    status: {
        type: String,
        required: true
    },

}, { timestamps: true })

const Character = mongoose.model('Character', charSchema)

module.exports = Character