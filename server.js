const http = require("http");
const port = 3000;
const server = http.createServer(function (req, res) {
  res.end("<h1>Hello node!!!</h1>");
});
server.listen(port, function (error) {
  if (error) {
    console.log("error", err);
  }
  console.log("server is running");
});
