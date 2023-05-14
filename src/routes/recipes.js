const express = require("express");

const RecipesController = require("../App/Controller/RecipesController");
const router = express.Router();

router.get("/", RecipesController.fetchRecipes);
router.get("/:id", RecipesController.getRecipeById);
router.post("/createRecipe", RecipesController.createRecipe);
router.put("/:id", RecipesController.updateRecipe);
router.delete("/:id", RecipesController.deleteRecipe);
router.get("/category/:id", RecipesController.getRecipeByCategoryId);
router.get("/ingredient/:id", RecipesController.getRecipeByIngredientId);

module.exports = router;
