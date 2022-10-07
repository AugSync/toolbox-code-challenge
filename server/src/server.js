const express = require('express')
const routes = require('./routes')
const error = require('./middlewares/error')
const app = express()
const cors = require('cors')

app.use(cors())

app.use('/', routes)
app.use(error.errorHandler)

module.exports = app
