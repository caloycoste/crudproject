const express = require('express')
const handlebars = require('express-handlebars')
const api = require('./routes/api')
const pages = require('./routes/pages')
const db = require('./db/db')

const app = express()

//body parser content-type: application/json
app.use(express.json())
//parser for url encoded data content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api', api)
app.use('', pages)

//view engine middleware using handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//check for mongodb connection
if (!db) console.log('Error connecting to database.')
else console.log('Connected to database successfully.')

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}..`)
})