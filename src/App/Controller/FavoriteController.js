const Favorites = require("../Model/Favorite");

class FavoritesController {
  // [GET] / categories
  fetchFavorite(req, res, next) {
    // console.log(req.query.id);
    Favorites.find({}).then((favorites) => {
      if (favorites) {
        res.status(200).json({ favorites });
      } else {
        res.status(400).json({ message: "error" });
      }
    });
  }
  // [GET] / categories/:id
  getFavortieByUserId(req, res, next) {
    Favorites.find({ userId: req.params.id }).then((favorite) => {
      if (favorite) {
        res.status(200).json(favorite);
      } else {
        res.status(400).json({ message: "error" });
      }
    });
  }
  // [POST] favorites
  async createFavorites(req, res, next) {
    const { userId, recipeId } = req.body;
    const favorite = await Favorites.find({ userId });
    const isMultiple = await favorite.some(
      (item, idx) => item.recipeId === recipeId
    );
    if (isMultiple) {
      res.json({
        message: "Favorites has already been created!",
      });
    } else {
      const newFavorites = new Favorites({
        userId,
        recipeId,
      });
      newFavorites.save().then((favorite) => {
        res.json({
          message: "Added favorites",
          favorite,
        });
      });
    }
  }
  // [DELETE] favorites/:id
  async deleteFavorites(req, res, next) {
    Favorites.deleteOne({ _id: req.params.id })
      .then((favorite) => {
        res.status(200).json({
          message: "Favorites deleted",
          favorite,
        });
      })
      .catch(next);
  }
}
module.exports = new FavoritesController();
