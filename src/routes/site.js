const express = require("express");
const middlewareController = require("../MiddleWare/auth");
const router = express.Router();

router.get(
  "/",
  // middlewareController.verifyToken,
  // middlewareController.checkIsAdmin,
  // siteController.index
);

module.exports = router;
