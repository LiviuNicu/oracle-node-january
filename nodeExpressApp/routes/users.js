var express = require("express");
var router = express.Router();
const JWT = require("../middlewares/jwt");
const userController = require("../controllers/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/:user", JWT.checkToken, userController.getAllUsers);

module.exports = router;
