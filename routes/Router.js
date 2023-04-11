const router = require("express").Router();
const { sendDataBase } = require("../controllers/dataController");

router.post("/sendToDataBase", sendDataBase);

module.exports = router;
