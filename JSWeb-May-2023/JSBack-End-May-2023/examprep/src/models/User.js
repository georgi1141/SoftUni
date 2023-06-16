const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username required!"],
    unique: [true, "Username already exists!"],
  },
  password: {
    type: String,
    required: [true, "Password required!"],
  },
  email: {
    type: String,
    required: [true, "Email required!"],
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
