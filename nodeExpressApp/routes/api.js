const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

//public
router.post("/auth/login", authController.loginAPI);
router.post("/auth/register", authController.registerAPI);

module.exports = router;
