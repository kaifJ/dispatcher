const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const sendOTP = require("../auth/twilio");

const router = express.Router();

router.post("/registerDevice", async (req, res) => {
  //save user
  let { name, number } = req.body;
  let user = User.find({ number });
  if (!user) {
    try {
      user = new User({ name, number });
      await user.save();
      //generate an OTP
      sendOTP(number, "Here is your OTP 454545");
      /* 
          Verify OTP
          if Matched then connect to socket
          else return 
      */
      res.send(user);
    } catch (error) {
      res.status(500).json({ errors: [error] });
    }
  }
  res.send(user);
});

router.post("/confirmOTP", async (req, res) => {
  //Verify OTP
});

router.post("/addFriends", async (req, res) => {
  let { numbers } = req.body;
  try {
    let users = User.find({ _id: { $in: [...numbers] } });
    let currentUser = User.findById(req.body.selfId);
    users.forEach(user => currentUser.friends.push(user.number));
    res.send(currentUser);
  } catch (error) {}
});

module.exports = router;
