const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipes = new Schema(
  {
    recipeId: { type: Number },
    categoryId: { type: Number },
    title: { type: String, required: true },
    photo_url: { type: String, required: true },
    photosArray: { type: Array, required: true },
    time: { type: String, required: true },
    ingredients: { type: Array, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("recipes", recipes);
