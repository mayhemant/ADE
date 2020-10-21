const express = require("express");
const {
  create,
  update,
  remove,
  read,
  list,
  //   categoryBySlug,
} = require("../controllers/subCategory");
const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/auth");
const router = express.Router();

router.post("/sub", requireSignin, adminMiddleware, create);
router.get("/subs", list);
router.get("/sub/:slug", read);
router.put("/sub/:slug", requireSignin, adminMiddleware, update);
router.delete("/sub/:slug", requireSignin, adminMiddleware, remove);

// router.param("catSlug", categoryBySlug);
module.exports = router;
