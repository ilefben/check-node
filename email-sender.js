const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bhamoudailef@gmail.com",
    pass: "ilef....",
  },
});
const mailOptions = {
  from: "bhamoudailef@gmail.com",
  to: "Wbenyounes1@gmail.com",
  subject: "Sending email using node.js",
  text: "heeyyy",
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log("error", err);
  }
  console.log("Email sent : " + info);
});
