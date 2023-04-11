const fs = require("fs");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const { EMAIL, PASSWORD } = require("../env");

const sendMessageEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  let { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const messageEmail = {
    from: `${email}`,
    to: process.env.EMAIL_ADRESS,
    subject: `${subject}`,
    text: `${message}`,
    html: `<h3>
    Hello my name is: ${name}
    Email: ${email}
    
    Subject is: ${subject}
    
    Message is: ${message} 
    
    </h3>`,
  };

  transporter
    .sendMail(messageEmail)
    .then((info) => {
      fs.readFile("./dataHistory.json", "utf-8", (err, data) => {
        if (err) {
          console.log("As error occurred: ", err.message);
        } else {
          const dataJson = JSON.parse(data);

          const infoUrl = nodemailer.getTestMessageUrl(info);

          let newClient = {
            name: `${name}`,
            email: `${email}`,
            subject: `${subject}`,
            message: `${message}`,
            preview: `${infoUrl}`,
          };

          dataJson.clients.push(newClient);

          fs.writeFile(
            "./dataHistory.json",
            JSON.stringify(dataJson),
            (err) => {
              if (err) {
                console.log("Error is:", err.message);
              } else {
                console.log("Names updated!", newClient);
              }
            }
          );
        }
      });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });
};

module.exports = {
  sendMessageEmail
};
