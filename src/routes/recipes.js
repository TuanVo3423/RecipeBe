const express = require("express");

const RecipesController = require("../App/Controller/RecipesController");
const router = express.Router();

router.get("/", RecipesController.fetchRecipes);
router.get("/:id", RecipesController.getRecipeById);
router.get("/category/:id", RecipesController.getRecipeByCategoryId);
router.get("/ingredient/:id", RecipesController.getRecipeByIngredientId);

module.exports = router;
