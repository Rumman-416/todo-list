const express = require("express");
const {
  showList,
  postList,
  updateList,
  deleteList,
} = require("../controllers/controller");

const router = express.Router();

router.get("/", showList);
router.post("/", postList);
router.put("/:id", updateList);
router.delete("/:id", deleteList);

module.exports = router;
