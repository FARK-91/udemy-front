const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// Invocamos metodos necesarios para el servicio
const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})

// Iniciamos el servicio.
app.get('*', (request, response) => {
    response.send('Chanchito Feliz')
})

module.exports = app