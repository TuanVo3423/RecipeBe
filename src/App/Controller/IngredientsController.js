const Ingredients = require("../Model/Ingredients");

class IngredientsController {
  // [GET] / categories
  fetchIngredients(req, res, next) {
    // console.log(req.query.id);
    Ingredients.find({}).then((ingredient) => {
      if (ingredient) {
        res.status(200).json({ ingredient });
      } else {
        res.status(400).json({ message: "error" });
      }
    });
  }
  // [GET] /ingredients/:id
  getIngredientbyId(req, res, next) {
    Ingredients.find({ ingredientId: req.params.id }).then((ingredient) => {
      console.log("ingredientID :", ingredient);
      if (ingredient) {
        res.status(200).json({ ingredient });
      } else {
        res.status(400).json({ message: "error" });
      }
    });
  }
}
module.exports = new IngredientsController();
