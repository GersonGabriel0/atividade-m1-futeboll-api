'use strict'

const express = require('express')
const cors = require('cors')
const config = require('./config')
const timeRoutes = require('./routes/time-routes')
const jogoRoutes = require('./routes/jogo-routes')
const jogadorRoutes = require('./routes/jogador-routes')
const estadioRoutes = require('./routes/estadio-routes')
const tabelaRoutes = require('./routes/tabela-routes')

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/time', timeRoutes)
app.use('/api/jogo', jogoRoutes)
app.use('/api/jogador', jogadorRoutes)
app.use('/api/estadio', estadioRoutes)
app.use('/api/tabela', tabelaRoutes)

app.listen(config.port, () =>
  console.log('Sua API esta funcionado em http://localhost:' + config.port)
)