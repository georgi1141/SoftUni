const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength:[10,'Email must be at least 10 characters!'],
    required: [true, "Email required!"],
    unique: [true, "Email already exists!"],
  },
  password: {
    type: String,
    minLength:[4,'Password must be at least 4 characters!'],
    required: [true, "Password required!"],
  },
});

userSchema.virtual("repeatPassword")
.set(function (value) {
  if (this.password != value) {
    throw new Error("Passwords do not match!");
  }
});

userSchema.pre("save", async function () {
  const hashPass = await bcrypt.hash(this.password, 10);
  this.password = hashPass;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
