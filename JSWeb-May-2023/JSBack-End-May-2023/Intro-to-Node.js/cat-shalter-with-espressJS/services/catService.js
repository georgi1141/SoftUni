const Cat = require('../models/Cat')

exports.create = (data)=>{
        Cat.create(data)
}