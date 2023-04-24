const Recipes = require("../Model/Recipes");

class RecipesController {
  // [GET] / recipes
  fetchRecipes(req, res, next) {
    // console.log(req.query.id);
    Recipes.find({}).then((Recipes) => {
      res.status(200).json({ Recipes });
    });
  }
  // [GET] / recipes/:id
  getRecipeById(req, res, next) {
    Recipes.findOne({ recipeId: req.params.id }).then((recipe) => {
      console.log(recipe);
      res.status(200).json({ recipe });
    });
  }
  // [GET] recipes/category/:id
  getRecipeByCategoryId(req, res, next) {
    Recipes.findOne({ categoryId: req.params.id }).then((recipe) => {
      console.log(recipe);
      res.status(200).json({ recipe });
    });
  }
  // [GET] recipes/ingredient/:id
  getRecipeByIngredientId(req, res, next) {
    const recipesArray = [];
    Recipes.find({}).then((recipes) => {
      recipes.map((data) => {
        data.ingredients.map((index) => {
          if (index[0] == req.params.id) {
            recipesArray.push(data);
          }
        });
      });
      res.status(200).json({ recipesArray });
    });
  }
}
module.exports = new RecipesController();
