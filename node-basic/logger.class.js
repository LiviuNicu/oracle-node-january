const EventEmitter = require("events");
class Logger extends EventEmitter {
  log(message) {
    console.log("Logger Class", message);
    this.emit("messageLogged", message);
  }
}
module.exports = Logger;
