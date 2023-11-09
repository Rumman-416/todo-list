const express = require("express");
const {
  handleUserSignup,
  displayUserSignup,
  handleUserlogin,
  handleProfilelogin,
} = require("../controllers/user");

const router = express.Router();

router.get("/signup", displayUserSignup);
router.post("/signup", handleUserSignup);
router.post("/login", handleUserlogin);
router.post("/profile", verifyToken, handleProfilelogin);

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({
      result: "Token is not valid",
    });
  }
}

module.exports = router;
