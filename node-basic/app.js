const pathModule = require("./path.module");
const osModule = require("./os.module");
const fsModule = require("./fs.module");
const eventEmitterModule = require("./eventEmitter.module");

//Path Module
console.log(__dirname, __filename);
pathModule(__filename);

//OS Module
osModule();

//FS Module
fsModule.publicGetFilesAsync("./");
fsModule.publicGetFilesSync("./");

//EventEmitter Module
eventEmitterModule.emitCustomEvent();
eventEmitterModule.emitCustomEventWithValue({ id: 2, name: "John" });

//Logger class Events
const Logger = require("./logger.class");
const logger = new Logger();

logger.on("messageLogged", function (doc) {
  console.log(doc);
});
logger.log({ id: 4, name: "IT WORKS" });

const httpModule = require("./http.module");
httpModule();
