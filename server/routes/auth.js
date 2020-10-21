const express = require("express");
const { signup, signin } = require("../controllers/auth");
const { runValidation } = require("../validators");
const { userSignupValidator } = require("../validators/auth");
const router = express.Router();

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", signin);
module.exports = router;
