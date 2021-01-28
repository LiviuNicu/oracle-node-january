const express = require("express");
const router = express.Router();
const JWT = require("../middlewares/jwt");

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

//public
router.post("/auth/login", authController.loginAPI);
router.post("/auth/register", authController.registerAPI);

//private
router.get("/users", JWT.checkTokenAPI, userController.getAllUsersAPI);
module.exports = router;
