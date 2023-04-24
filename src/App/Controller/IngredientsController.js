const Ingredients = require("../Model/Ingredients");

class IngredientsController {
  // [GET] / categories
  fetchIngredients(req, res, next) {
    // console.log(req.query.id);
    Ingredients.find({}).then((ingredient) => {
      res.status(200).json({ ingredient });
    });
  }
  // [GET] /ingredients/:id
  getIngredientbyId(req, res, next) {
    Ingredients.find({ ingredientId: req.params.id }).then((ingredient) => {
      res.status(200).json({ ingredient });
    });
  }
}
module.exports = new IngredientsController();
