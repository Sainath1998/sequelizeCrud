const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const crudRouter = require('./routes/crudRouter')
const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json())
app.use('/',crudRouter)

module.exports = app