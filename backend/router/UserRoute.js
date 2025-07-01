const express = require("express");
const User = require("../models/User");
const router = express.Router();



router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log("signup body data=",req.body)

  try {
  
    const existuser = await User.findOne({ email });
    if (existuser) {
      return res.json({ msg: "User already exists", success: false });
    }


    const user = new User({ name, email, password });
    await user.save();

    res.json({ msg: "User added successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", success: false });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(" login body data =", req.body);

    const existuser = await User.findOne({ email });
    if (!existuser) {
      return res.json({ msg: "Invalid credentials", success: false });
    }

    if (existuser.password !== password) {
      return res.json({ msg: "Invalid credentials", success: false });
    }

    return res.json({ msg: "Login successful", success: true, user: existuser });
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Server error", success: false });
  }
});







module.exports = router;
