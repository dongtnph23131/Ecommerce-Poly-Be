const express = require('express')
const cors = require('cors')
const categoryRouter = require('./routers/category')
const authRouter = require('./routers/auth')
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', categoryRouter)
app.use('/api', authRouter)
module.exports = app