const express = require("express");

const IngredientsController = require("../App/Controller/IngredientsController");
const router = express.Router();

router.get("/", IngredientsController.fetchIngredients);
router.get("/:id", IngredientsController.getIngredientbyId);

module.exports = router;
