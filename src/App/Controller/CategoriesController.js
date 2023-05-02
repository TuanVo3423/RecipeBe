const Categories = require("../Model/Categories");

class CategoriesController {
  // [GET] / categories
  fetchCategories(req, res, next) {
    // console.log(req.query.id);
    Categories.find({}).then((categories) => {
      if (categories) {
        res.status(200).json({ categories });
      } else {
        res.status(400).json({ message: "error" });
      }
    });
  }
  // [GET] / categories/:id
  getCategoryById(req, res, next) {
    Categories.findOne({ categoryId: req.params.id }).then((category) => {
      if (category) {
        res.status(200).json({ category });
      } else {
        res.status(400).json({ message: "error" });
      }
    });
  }
}
module.exports = new CategoriesController();
