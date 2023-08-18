const express = require('express')
const cors = require('cors')
const categoryRouter = require('./routers/category')
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', categoryRouter)
module.exports = app