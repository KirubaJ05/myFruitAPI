const express = require ('express')
const cors = require('cors')
const fruitsApp = express()
const fruitRoutes = require('./routes/fruitRoutes')


fruitsApp.use(cors())
fruitsApp.use(express.json()) // for any http method
fruitsApp.use('/fruits',fruitRoutes)

module.exports = fruitsApp