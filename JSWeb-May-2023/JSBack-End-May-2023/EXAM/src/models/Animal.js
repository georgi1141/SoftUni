const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    minLenght:[2,'Name must be at least 2 characters!'],
    required: [true, "Name is required"],
  },
  years: {
    type: Number,
    min:1,
    max:100,
    required: [true, "Age is required"],
  },
  kind: {
    type: String,
    minLenght:[3,'Kind must be at least 3 characters long!'],
    required: [true, "Breed is required"],
  },
  image: {
    type: String,
    match:[/^https:\/\//,'Invalid imageUrl!'],
    required: [true, "ImageUrl is required"],
  },
  need: {
    type: String,
    minLenght:[3,'Need must be at least 3 characters!'],
    maxLength:[20,'Need should not exeed more than 20 characters!'],
    required: [true, "Need is required"],
  },
  location: {
    type: String,
    minLenght:[5,'Location must be at least 5 characters!'],
    maxLength:[15,'Location should not exeed more than 15 characters!'],
    required: [true, "Location is required"],
  },
  description: {
    type: String,
    minLenght:[5,'Description must be at least 5 characters!'],
    maxLength:[50,'Description should not exeed more than 50 characters!'],
    required: [true, "Description is required"],
  },
  donations: [
    {
      userId: {
        type: mongoose.Types.ObjectId,
        ref:'User'
      },
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
