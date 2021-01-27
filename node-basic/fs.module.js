const fs = require("fs");

function getFilesSync(path) {
  const files = fs.readdirSync(path);
  console.log(files);
}

function getFilesAsync(path) {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      console.log(files);
    }
  });
}

module.exports.publicGetFilesSync = getFilesSync;
module.exports.publicGetFilesAsync = getFilesAsync;
