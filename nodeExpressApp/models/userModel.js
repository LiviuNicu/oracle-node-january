const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  hashed_password: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
});
const user = mongoose.model("user", UserSchema);

function hashPW(pwd) {
  return crypto.createHash("sha256").update(pwd).digest("base64").toString();
}

exports.register = function (userReq) {
  let newUser = new user();

  newUser.set("email", userReq.email);
  newUser.set("firstName", userReq.firstName);
  newUser.set("lastName", userReq.lastName);
  newUser.set("hashed_password", hashPW(userReq.password));

  return new Promise((resolve, reject) => {
    newUser.save(function (err, userInserted) {
      if (err) {
        reject({ err });
      } else {
        resolve({ success: "User Inserted", user: userInserted });
      }
    });
  });
};

//{email:"",password:""}
exports.login = function (userReq) {
  return new Promise((resolve, reject) => {
    user.findOne({ email: userReq.email }).exec(function (err, user) {
      if (err) {
        reject({ err });
      }

      if (!user) {
        reject({ message: "user not found" }); // in production user more generic messages for security
      } else {
        if (user.hashed_password === hashPW(userReq.password)) {
          resolve({ user });
        } else {
          reject({ message: "worng password" }); // in production user more generic messages for security
        }
      }
    });
  });
};
