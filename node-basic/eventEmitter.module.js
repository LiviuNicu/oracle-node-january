const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("messageLogged", function (doc) {
  console.log("messageLogged is triggerd");
  if (doc) {
    console.log(doc);
  }
});

function emitCustomEvent() {
  emitter.emit("messageLogged");
}

function emitCustomEventWithValue(obj) {
  emitter.emit("messageLogged", obj);
}

module.exports.emitCustomEvent = emitCustomEvent;
module.exports.emitCustomEventWithValue = emitCustomEventWithValue;
