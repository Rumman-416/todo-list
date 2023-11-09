const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretKey = "keySecret";

async function displayUserSignup(req, res) {
  try {
    const user = await User.find();
    res.json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
}

async function handleUserSignup(req, res) {
  try {
    const hashedPw = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPw,
    });
    res.json({
      success: true,
      user,
    });
  } catch (err) {
    console.log(err);
  }
}

async function handleUserlogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user === null) {
    return res.status(400).send("cannot find user");
  }
  // console.log(password);
  // console.log(user.password);
  try {
    if (await bcrypt.compare(password, user.password)) {
      jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
        res.json({
          message: "success",
          token,
        });
      });
    } else {
      res.send("not a valid pw");
    }
  } catch (error) {
    console.log(error);
  }
}

handleProfilelogin = (req, res) => {
  jwt.verify(req.token, secretKey, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        message: "profile accessed",
        data,
      });
    }
  });
};
module.exports = {
  handleUserSignup,
  displayUserSignup,
  handleUserlogin,
  handleProfilelogin,
};
