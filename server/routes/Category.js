const express = require("express");
const {
  create,
  update,
  remove,
  read,
  list,
  //   categoryBySlug,
} = require("../controllers/category");
const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/auth");
const router = express.Router();

router.post("/category", requireSignin, adminMiddleware, create);
router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", requireSignin, adminMiddleware, update);
router.delete("/category/:slug", requireSignin, adminMiddleware, remove);

// router.param("catSlug", categoryBySlug);
module.exports = router;
