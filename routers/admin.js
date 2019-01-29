const express = require("express");
const router = express.Router();
const adminController = require('../controls/admin');

router.get("/", adminController.adminInterface);
router.get("/user", adminController.adminGetUser);
router.post("/user/delete", adminController.adminDelUser);
router.get("/category", adminController.adminGetCate);
router.post("/category/add", adminController.adminAddCate);
router.post("/category/delete", adminController.adminDelCate);
router.get("/content", adminController.adminGetCont);
router.post("/content/add", adminController.adminAddCont);
router.post("/content/delete", adminController.adminDelCont);

module.exports = router;