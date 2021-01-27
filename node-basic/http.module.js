const http = require("http");
const hostname = "127.0.0.1";
const port = "3000";

function startServer() {
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");
      res.write("HOME");
      res.end();
    }
    if (req.url === "/login") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");
      res.write("LOGIN");
      res.end();
    }
  });

  server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
    //console.log("Server is running at http://" + hostname + ":" + port + "/");
  });
}

module.exports = startServer;
