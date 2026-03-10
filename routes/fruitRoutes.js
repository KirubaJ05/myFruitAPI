const express = require ('express')
const fruitsRouter = express.Router()
const fruitsController = require('../controllers/fruitsController')
//anything that's in this folder is coming from the endpoint /fruits/ which is routed by app.js

fruitsRouter.get('/',fruitsController.showAllFruits)

//e.g. this would be localhost:3000/fruits/banana would search for that fruit 
//we don't need an input value for the showFruit as it's implied that it'll be the request parameter
fruitsRouter.get('/:name',fruitsController.showFruit)

fruitsRouter.post('/', fruitsController.createFruit)

fruitsRouter.patch('/:name',fruitsController.updateFruit)

fruitsRouter.delete('/:name',fruitsController.deleteFruit)

module.exports = fruitsRouter