const Cat = require('../models/Cat')

exports.create = (data)=>{
        Cat.create(data)
}

exports.getAll = async()=>{

    return await Cat.find().lean()
}

exports.deteleCat = async (id)=>{

    await Cat.deleteOne({_id:id})

}

exports.getOne = async (id)=>{
    return await Cat.findById(id).lean()
}