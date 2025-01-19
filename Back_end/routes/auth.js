const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');   //express validator for user authenticate //
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

const JWT_SECRET  = "imanshuu@12"
// Create a user using: POST "/api/auth/createuser" . No login required
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

      const data ={
        user:{
          id: user.id //data use users id for create a data 
        }
      }

      const authToken = jwt.sign(data , JWT_SECRET) //provide JWT token
           console.log(authToken)

       // Return a success response
      res.status(201).json({ message: 'User created successfully', authToken});  //if i want to see user details i  will replace authToken to "user" ; 
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occurred");   //this error occur when the code or internal server has some problem//
    }
  }
);

module.exports = router;
