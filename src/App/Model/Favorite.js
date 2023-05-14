const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favorites = new Schema(
  {
    userId: { type: String, required: true },
    recipeId: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("favorites", favorites);
