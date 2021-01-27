const userModel = require("../models/userModel");

//for SSR
exports.login = function (req, res) {
  userModel
    .login(req.body)
    .then((response) => {
      res.redirect("/users/" + response.user._id);
    })
    .catch((err) => {
      res.redirect("login", { title: "login", error: err.message });
    });
};

//API
exports.loginAPI = function (req, res) {
  userModel
    .login(req.body)
    .then((response) => {
      //success status for a request
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

//For SSR
exports.register = async function (req, res) {
  try {
    await userModel.register(req.body);
    res.redirect("/auth/login");
  } catch (err) {}
};

//For API
exports.registerAPI = async function (req, res) {
  try {
    const response = await userModel.register(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
};
