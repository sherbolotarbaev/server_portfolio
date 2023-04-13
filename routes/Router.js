const router = require("express").Router();
const {
  getDataForDB,
  sendDataBase,
  saveDataToHistory,
} = require("../controllers/dataController");

router.get("/getData", getDataForDB);
router.post("/sendData", sendDataBase);

module.exports = router;
