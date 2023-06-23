const jwt = require('../lib/jwt')
const {SECRET} = require('../util/secret')



exports.generateToken = async (user)=>{

    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
      }
    
    const token = await jwt.sign(payload,SECRET)
    
    return token 

}