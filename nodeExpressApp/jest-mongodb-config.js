module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: "jest",
    },
    binary: {
      version: "3.6.3", //mongodb version
      skipMD5: true,
    },
    autoStart: false,
  },
};
