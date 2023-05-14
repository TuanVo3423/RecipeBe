const express = require("express");
const FavoriteController = require("../App/Controller/FavoriteController");
const router = express.Router();

router.get("/", FavoriteController.fetchFavorite);
router.get("/:id", FavoriteController.getFavortieByUserId);
router.post("/", FavoriteController.createFavorites);
router.delete("/:id", FavoriteController.deleteFavorites);

module.exports = router;
