const siteRoute = require("./site");
const authRoute = require("./auth");
const adminRoute = require("./admin");
const userRoute = require("./users");
const categoriesRoute = require("./categories");
const ingredientsRoute = require("./ingredients");
const recipesRoute = require("./recipes");

function Routes(app) {
  app.use("/auth", authRoute);
  app.use("/admin", adminRoute);
  app.use("/users", userRoute);
  app.use("/categories", categoriesRoute);
  app.use("/ingredients", ingredientsRoute);
  app.use("/recipes", recipesRoute);
  app.use("/", siteRoute);
}

module.exports = Routes;
