const FruitsModel = require ('../models/FruitModel')

const showAllFruits = async (req,res) => {
    try {
        const fruits = await FruitsModel.showAllFruits()
        res.status(200).send(fruits)
    } catch (err) {
        res.status(500).send({error: err});

    }
}

const showFruit = async (req,res) => {
    try {
        //get the name of the fruit and in lowercase
        const name = req.params.name.toLowerCase()
        //call the function from our model
        const fruits = await FruitsModel.showFruit(name)
        //send back the reponse status code and the body of the response using the variable
        res.status(200).send(fruits)
    } catch (err) {

        res.status(500).send({error: err});

    }
}

const createFruit = async (req,res) => {
    try {
        const newFruit = await FruitsModel.create(req.body);
        res.status(201).send(newFruit)
    } catch (err) {
        res.status(409).send({error:err})
    }
}


const updateFruit = async (req,res) => {
    const name = req.params.name.toLowerCase()
    try{
        const fruit = await FruitsModel.showFruit(name)[0]
        console.log(fruit);
        /* console.log(fruit);
        console.log(fruit[0]);
        console.log(req.body.name); */
        const result = await fruit.update(req.body)
        console.log(result);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({error: err})
    }
}

const deleteFruit = async (req,res) => {
    const name = req.params.name.toLowerCase()
    try{
        const fruit = await FruitsModel.showFruit(name)[0]
        const result = await fruit.delete(name)
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({error: err})
    }
}

module.exports = {showAllFruits,showFruit,createFruit,updateFruit,deleteFruit}