const path = require("path");

function getPath(fileName) {
  console.log(path.parse(fileName));
}

module.exports = getPath;
