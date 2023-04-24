const Categories = require("../Model/Categories");

class CategoriesController {
  // [GET] / categories
  fetchCategories(req, res, next) {
    // console.log(req.query.id);
    Categories.find({}).then((categories) => {
      res.status(200).json({ categories });
    });
  }
  // [GET] / categories/:id
  getCategoryById(req, res, next) {
    Categories.findOne({ categoryId: req.params.id }).then((category) => {
      res.status(200).json({ category });
    });
  }
}
module.exports = new CategoriesController();
