require('dotenv').config('./env')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user-routes')
const { MONGODB_URI } = require('./utils/config')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(MONGODB_URI).then(() => console.log(`application connected to DB`)).catch((err) => console.log(`error connecting to DB, ${err}`))

app.use('/api', userRoutes)

// handle unknown endpoint, handle favicon, handle global error ?
module.exports = app