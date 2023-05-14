const mongoose = require("mongoose");
const Recipes = require("../Model/Recipes");
class AdminProductController {
  // [GET] http:localhost:5000/
  index(req, res, next) {
    Recipes.find({}).then((Recipes) => {
      res.status(200).json({ Recipes });
    });
  }
}

module.exports = new AdminProductController();
