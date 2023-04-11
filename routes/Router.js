const router = require("express").Router();
const { sendMessageEmail } = require("../controllers/dataController");

router.post("/sendToEmail", sendMessageEmail);

module.exports = router;
