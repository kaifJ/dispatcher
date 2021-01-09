const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/", async (req, res) => {
  //save user
  let { name, number } = req.body;
  let user = new User({ name, number });
  console.log(name);
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    console.log("Error");
  }
});

module.exports = router;
