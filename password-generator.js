const generatePassword = require("generate-password");
function generatePassword() {
  const password = generatePassword.generate({
    length: 10,
    charset: "abcdefghijklmnopqrstuvwxyz123456789",
  });
  return password;
  //console.log("password");
}
generatePassword();
