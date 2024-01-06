console.log("start running");
const fs = require("fs");
fs.appendFileSync("welcome.txt", "Hello node");
var data = "this the data of the hello.txt file";
fs.writeFile("hello.txt", data, (error) => {
  if (error) {
    console.log("something wrong");
  }
  console.log("here is the file's data :", data);
});
