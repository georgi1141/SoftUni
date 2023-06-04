const mongoose = require('mongoose')

const breedSchema = new mongoose.Schema({
    name:String
})

const Breed = mongoose.model('breed',breedSchema)

module.exports = Breed