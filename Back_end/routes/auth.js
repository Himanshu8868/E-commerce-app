const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');   //express validator for user authenticate //
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
const Fetchuser = require('../middleware/Fetchuser')

const JWT_SECRET = "Himanshuu@12"
// Route 1 :  Create a user using: POST "/api/auth/createuser" . No login required
router.post(
  '/createuser',
  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    body('phone', 'Enter a valid phone number').isMobilePhone(),
  ],
  async (req, res) => {
    try {
      // If there are errors, return bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Check whether the user with the email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Sorry, the user with this email already exists" });
      }
      // Generate salt and hash the password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass, // Store hashed password
        phone: req.body.phone, // Assign phone value
      });

      // Exclude sensitive data (e.g., password) from user response
      const { password, ...userDetails } = user.toObject();

      const data = {
        user: {
          id: user.id //data use users id for create a data 
        }
      }

      // Generate JWT token
      const authToken = jwt.sign(data, JWT_SECRET);

      // Send response with user details and auth token in one response
      return res.status(201).json({
        message: 'User created successfully',
        user: userDetails, // Send user details (excluding password)
        authToken, // Send the auth token
      });

    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal server error");
    }
  }
);


// Route  2:  Authenticate  a user using: POST "/api/auth/login" . No login required
router.post(
  '/login',
  [
    body('email', 'Enter a valid email').isEmail(),
    body('password', "password can't Be Blank").exists(),//
  ], async (req, res) => {
    // If there are errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Please try to Login With corrct Credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);    //Compare password using hash password
      if (!passwordCompare) {
        return res.status(400).json({ error: "password not matched" })
      }
      const data = {
        user: {
          id: user.id //data use users id for create a data 
        }
      }
      const jwtToken = jwt.sign(data, JWT_SECRET);
      res.json({ jwtToken })

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");   //this error occur when the code or internal server has some problem//
    }
  })
// Route  3:  Get logediin user Details using : POST "/api/auth/getuser" .  login required
router.post('/getuser', Fetchuser ,async (req, res) => {

  try {
    const userId = req.user.id;
    const user = await User.findByID(userId).select("-password")
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user); // Return user details excluding password
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error");   //this error occur when the code or internal server has some problem//
  }
});

module.exports = router;
