const User = require("../models/User");
const bcrypt = require("bcrypt");
const { generateToken } = require('../util/generateToken')


exports.login = async (userData) => {
  const user = await User.findOne({ username: userData.username }).lean();
  

  if (!user) {
    throw new Error("Invalid username or password!");
  }

  const isValid = await bcrypt.compare(userData.password, user.password);
  if (!isValid) {
    throw new Error("Invalid username or password!");
  }

const token = await generateToken(user)

return token 

};

exports.register = async (userData) => {
  const user = await User.findOne({ username: userData.username });

  if (user) {
    throw new Error("User already exists!");
  }

  const createdUser =  await User.create(userData)

  const token = await generateToken(createdUser)

  return token  


};
