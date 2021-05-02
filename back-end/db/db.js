const mongoose = require('mongoose')
const dbURI = 'mongodb+srv://caloy_123:caloy_123@crudproject.y9qfx.mongodb.net/mcu-db?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose

