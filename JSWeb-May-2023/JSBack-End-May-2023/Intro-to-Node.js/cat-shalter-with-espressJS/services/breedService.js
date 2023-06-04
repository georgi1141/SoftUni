const Breed = require('../models/Breed')

exports.create = (data)=> {
    Breed.create(data)
}

exports.getAll = async()=>{
   return await Breed.find().lean()
}