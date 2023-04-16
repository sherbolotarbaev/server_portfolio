const router = require("express").Router();
const {
  getDataForDB,
  sendDataBase,
  saveDataToHistory,
  deleteDataForDB,
} = require("../controllers/dataController");

router.get("/getData", getDataForDB);
router.post("/deleteData", deleteDataForDB);
router.post("/sendData", sendDataBase);
router.post("/historySave", saveDataToHistory);

module.exports = router;
