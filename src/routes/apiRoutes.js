const { Router } = require("express");
const { apiIndexController } = require("../controller/apiController");

const router = Router();

router.get("/", apiIndexController);

module.exports = router;
