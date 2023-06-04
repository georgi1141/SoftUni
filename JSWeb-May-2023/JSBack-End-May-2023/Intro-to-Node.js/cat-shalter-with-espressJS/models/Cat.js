const mongoose = require('mongoose')

const catSchema = mongoose.Schema({
    name:String,
    description:String,
    image:String,
    breed:String
})

const Cat = mongoose.model('cat',catSchema)

module.exports = Cat