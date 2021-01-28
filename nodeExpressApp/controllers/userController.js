const userModel = require("../models/userModel");
//SSR
exports.getAllUsers = async function (req, res) {
  try {
    const allUsersResponse = await userModel.getAllUsers();
    const loggedUser = await userModel.getUserById(req.params.user);
    // const loggedUser = await userModel.getUserById(req.userData._id)
    res.render("userList", {
      title: "Users",
      allUsers: allUsersResponse,
      loggedUser,
    });
  } catch (err) {}
};

//API
exports.getAllUsersAPI = async function (req, res) {
  try {
    const allUsersResponse = await userModel.getAllUsers();

    res.status(200).json(allUsersResponse);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.upload = function (req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files added");
  }

  const simpleFile = req.files.simpleFile;

  simpleFile.mv("public/images/" + req.body.userID + ".png", function (err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.redirect("/users/" + req.userData._id);
  });
};

exports.getUserProfile = async function (req, res) {
  try {
    const selectedUser = await userModel.getUserById(req.params.user);
    res.render("profile", { title: "User Profile", selectedUser });
  } catch (err) {
    res.status(500).json(err);
  }
};
