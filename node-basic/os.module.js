const os = require("os");

function getOSInfo() {
  console.log(
    os.platform(),
    os.type(),
    os.freemem(),
    os.totalmem(),
    os.userInfo()
  );
}

module.exports = getOSInfo;
