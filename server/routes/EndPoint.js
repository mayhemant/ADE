const express = require("express");
const { endPoint } = require("../controllers/endPoint");
const router = express.Router();

router.get("/", endPoint);

module.exports = router;
