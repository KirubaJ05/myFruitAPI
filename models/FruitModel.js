let fruitsArray = require ('../fruits.json')

class FruitsModel {
    constructor(fruit){
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }
    static showAllFruits() {
        return fruitsArray.map(f => new FruitsModel(f))
    }

    static showFruit(name) {
        //declare a variable where we filter through the array that we imported then add in every fruit that starts with the name that the user has entered in their endpoint URL
        const fruits = fruitsArray.filter(fruit =>
            fruit.name.toLowerCase().startsWith(name.toLowerCase()))
        if (fruits.length > 0 ) { 
            //If there is something in the array the create a new FruitsModel object with each item in the array
            return fruits.map(f => new FruitsModel(f))
        } else {
            throw `No fruits found with that name`;
        }
    }

    static create(data){
        const newFruit = data
        console.log(newFruit); //print the newfruit we're supposed to add for debugging purposes
        newFruit["id"] = fruitsArray.length + 1 
        fruitsArray.push(newFruit);
        return new FruitsModel(newFruit)
    }

    update(data) {
        const updateFruit = fruitsArray.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(updateFruit) {
            updateFruit.name = data.name
        } else {
            throw `Fruit not found`
        }
        return new FruitsModel(updateFruit)
    }
    delete(){
        const deleteFruit = fruitsArray.findIndex(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(deleteFruit!="undefined"){
            delete fruitsArray[deleteFruit]
        } else {
            throw `Fruit not found`
        }
        return `${this.name} has been deleted`

    }
}


module.exports = FruitsModel