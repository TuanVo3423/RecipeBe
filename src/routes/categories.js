const express = require("express");

const CategoriesController = require("../App/Controller/CategoriesController");
const router = express.Router();

router.get("/", CategoriesController.fetchCategories);
router.get("/:id", CategoriesController.getCategoryById);

module.exports = router;
