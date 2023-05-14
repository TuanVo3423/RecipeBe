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
    Recipes.find({ categoryId: req.params.id }).then((recipe) => {
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
  // [PUT] /recipes/:id
  updateRecipe(req, res, next) {
    // console.log('req.body : ',req.body);
    Recipes.updateOne({ _id: req.body.id }, req.body)
      .then(() => {
        res.status(200).json(req.body);
      })
      .catch(next);
  }
  // [DELETE] /recipes/:id
  deleteRecipe(req, res, next) {
    Recipes.deleteOne({ _id: req.params.id })
      .then((product) => {
        res.status(200).json(req.params.id);
      })
      .catch(next);
  }
  // [POST] recipes/createRecipe
  createRecipe(req, res, next) {
    console.log("req.body: ", req.body);
    const newRecipe = new Recipes(req.body);
    // console.log("newPost : ", req.body.createdAt);
    newRecipe
      .save()
      .then((recipe) => {
        res.status(200).json(recipe);
      })
      .catch(next);
  }
}
module.exports = new RecipesController();
