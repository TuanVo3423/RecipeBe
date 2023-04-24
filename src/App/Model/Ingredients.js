const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredients = new Schema(
  {
    ingredientId: { type: Number, required: true },
    name: { type: String, required: true },
    photo_url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ingredients", ingredients);
