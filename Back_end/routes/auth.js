const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'himanshu@123'; // Ensure this is in your environment variables
const Fetchuser = require('../middleware/Fetchuser');

// Route 1: Create a user using: POST "/api/auth/createuser". No login required
router.post(
  '/createuser',
  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    body('phone', 'Enter a valid phone number').isLength({ min: 10, max: 15 }).isMobilePhone(),
  ],
  async (req, res) => {
    try {
      // If there are validation errors, return bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Check if the user exists by email or phone
      const existingUser = await User.findOne({ $or: [{ email: req.body.email }, { phone: req.body.phone }] });
      if (existingUser) {
        return res.status(400).json({ error: "User with the provided email or phone number already exists" });
      }

      // Generate salt and hash the password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass, // Store hashed password
        phone: req.body.phone, // Store phone number
      });

      // Exclude sensitive data (password)
      const { password, ...userDetails } = user.toObject();

      const data = {
        user: {
          id: user.id, // Use user ID for JWT payload
        },
      };

      // Generate JWT token
      const jwtToken = jwt.sign(data, JWT_SECRET);

      // Send single response
      return res.status(201).json({
        message: 'User created successfully',
        user: userDetails, // Send user details (excluding password)
        jwtToken, // Send the auth token
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Internal server error');
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
  // / Route 3: Get logged-in user details using POST "/api/auth/getuser". Login required
  router.post(
    '/getuser', Fetchuser, async (req, res) => {
    try {
      const userId = req.user.id;  // Extract user ID from the middleware (Fetchuser)
      
      // Find the user by their ID, excluding the password field
      const user = await User.findById(userId).select("-password");
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });  // User not found in the DB
      }
  
      res.status(200).json(user);  // Return user details (excluding password)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");  // Generic server error in case of failure
    }
  });
  
module.exports = router;
