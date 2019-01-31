const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const mainController = require('../controls/main');

router.use(bodyParser.urlencoded({
    extended: true
}))

router.get("/", mainController.indexInterface);
router.get("/dynamic", mainController.dynamicInterface);
router.post("/dynamic/update", mainController.dynamicUpdate);
router.get("/message", mainController.messageInterface);
router.post("/message/update", mainController.messageUpdate);
router.get("/about", mainController.aboutInterface);
router.get("/demo", mainController.demoInterface);
router.get("/resume", mainController.resumeInterface);

module.exports = router;
