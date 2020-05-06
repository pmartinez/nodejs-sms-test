const { Router } = require("express");
const {
  apiIndexController,
  postMessage,
  postMessageWhatsapp,
} = require("../controller/apiController");

const router = Router();

router.get("/", apiIndexController);
router.post("/api/sendMessage", postMessage);
router.post("/api/sendMessageWhatsapp", postMessageWhatsapp);
module.exports = router;
