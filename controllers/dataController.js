const fs = require("fs");
const DataModel = require("../models/DataModel");

const getDataForDB = async (req, res) => {
  const data = await DataModel.find();
  res.send(data);
};

const sendDataBase = async (req, res) => {
  let { name, email, subject, message } = req.body;

  DataModel.create({ name, email, subject, message })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

const deleteDataForDB = async (req, res) => {
  const { _id } = req.body;

  DataModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};

const saveDataToHistory = (req, res) => {
  fs.readFile("./dataHistory.json", "utf-8", (err, data) => {
    if (err) {
      console.log("As error occurred: ", err.message);
    } else {
      const dataJson = JSON.parse(data);

      let newClient = {
        name: `${name}`,
        email: `${email}`,
        subject: `${subject}`,
        message: `${message}`,
      };

      dataJson.clients.push(newClient);

      fs.writeFile("./dataHistory.json", JSON.stringify(dataJson), (err) => {
        if (err) {
          console.log("Error is:", err.message);
        } else {
          console.log("History updated!", newClient);
        }
      });
    }
  });
};

module.exports = {
  getDataForDB,
  sendDataBase,
  saveDataToHistory,
  deleteDataForDB,
};
