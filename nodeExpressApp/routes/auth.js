const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/login", function (req, res) {
  res.render("login", { title: "Login" });
});

router.get("/register", function (req, res) {
  res.render("register", { title: "Register" });
});

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
