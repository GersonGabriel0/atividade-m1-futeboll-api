'use strict'

const express = require('express')
const cors = require('cors')
const config = require('./config')
const timeRoutes = require('./routes/time-routes')

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/time', timeRoutes)

app.listen(config.port, () =>
  console.log('Sua API esta funcionado em http://localhost:' + config.port)
)