const express = require("express");
const {
  create,
  update,
  remove,
  read,
  list,
  //   categoryBySlug,
} = require("../controllers/organization");
const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/auth");
const router = express.Router();

router.post("/org", requireSignin, adminMiddleware, create);
router.get("/orgs", list);
router.get("/org/:slug", read);
router.put("/org/:slug", requireSignin, adminMiddleware, update);
router.delete("/org/:slug", requireSignin, adminMiddleware, remove);

// router.param("catSlug", categoryBySlug);
module.exports = router;
