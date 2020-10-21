const express = require("express");
const router = express.Router();
const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/auth");

const { eventCreateValidator } = require("../validators/event");

const { create, list, read, remove, update } = require("../controllers/event");
const { runValidation } = require("../validators");

router.post(
  "/event",
  eventCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);
router.get("/events", list);
router.get("/event/:slug", read);
router.put("/event/:slug", requireSignin, adminMiddleware, update);
router.delete("/event/:slug", requireSignin, adminMiddleware, remove);
module.exports = router;
