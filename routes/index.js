var express = require("express");
var router = express.Router();

const { manipulateNumber } = require("../controllers");

router.get("/api/LR", manipulateNumber);

module.exports = router;
