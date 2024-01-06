console.log("start running");
const fs = require("fs");
fs.appendFileSync("welcome.txt", "Hello node");
function readData(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
}
fs.readFile("hello.txt", readData);
