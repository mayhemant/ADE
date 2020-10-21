const express = require("express");
const router = express.Router();
const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/auth");

const { eventCreateValidator } = require("../validators/event");

const { create, list, remove } = require("../controllers/event");
const { runValidation } = require("../validators");
const { read, update } = require("../controllers/user");

router.post(
  "/event",
  eventCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);
router.get("/events", list);
router.get("/user/:username", requireSignin, read);
router.put("/user", requireSignin, authMiddleware, update);
router.delete("/event/:slug", requireSignin, adminMiddleware, remove);
module.exports = router;
