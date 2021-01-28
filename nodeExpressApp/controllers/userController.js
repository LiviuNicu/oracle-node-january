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
