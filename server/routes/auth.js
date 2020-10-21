const express = require("express");
const { signup, signin, signout } = require("../controllers/auth");
const { runValidation } = require("../validators");
const { userSignupValidator } = require("../validators/auth");
const router = express.Router();

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", signin);
router.get("/signout", signout);
module.exports = router;
