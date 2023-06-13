const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Username required!'],
        minLength:[5,'Minimum user length must be longer than 5 symbols!'],
        unique:true,
        validate:{
            validator:function(value){
                return /^[A-Za-z0-9]+$/.test(value)
            },
            message:'Username must consist of only English letters and digits'
        }
    },
    password:{
        type:String,
        required:[true,'Password required!'],
        minLength:[8,'Passowrd must be at least 8 characters!'],
        match: [/^[A-Za-z0-9]+$/,'Passowrd must consist of only English letters and digits']
    }
})

userSchema.virtual('repeatPassword')
.set(function(value){
    if(value!== this.password){
        throw new mongoose.MongooseError('Passwords do not match!')

    }
})

userSchema.pre('save',async function(){

    const hash = await bcrypt.hash(this.password,10)
    this.password = hash

})

const User = mongoose.model('User',userSchema)

module.exports = User