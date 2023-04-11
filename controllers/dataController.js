const DataModel = require("../models/DataModel")

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

module.exports = {
  sendDataBase
};
