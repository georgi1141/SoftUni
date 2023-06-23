const Animal = require('../models/Animal')



exports.create = (animalData)=>Animal.create(animalData)

exports.getAll = ()=> Animal.find().lean()

exports.getOne = (photoId)=> Animal.findById(photoId).populate().lean()

exports.edit = (photoId,photoData)=> Animal.findByIdAndUpdate(photoId,photoData)

exports.del = (photoId)=> Animal.findByIdAndDelete(photoId)

exports.getLastThree = ()=>Animal.find({}).sort({_id:-1}).limit(3)

exports.addDonation = async(animalId,userId)=>{
    const animal = await Animal.findById(animalId)
    animal.donations.push(userId)

    return animal.save()
}