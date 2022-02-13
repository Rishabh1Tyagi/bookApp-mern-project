const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const usersRoute = express.Router();

// Routes
// users routes
 
// Register
usersRoute.post('/register', asyncHandler(async(req,res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({email: email});
  if(userExists) {
      throw new Error('User Exist');
  }
  const userCreated = await User.create({ name, email, password})
  res.send(userCreated);
})) 

// Login
usersRoute.post('/login', asyncHandler(async(req,res) => {
    // res.send('login route');
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if(user && (await user.isPasswordMatch(password))){
        // set status code
        res.status(200)
        res.json({
            _id: user._id,
            name: user.name,
            password: user.password,
            email: user.password,
            token: generateToken(user._id),
        });
        // res.send(user)
    }else{
        res.status(401);
        throw new Error('Invalid Credentails');

        // res.send('User Not Found');
    }
  }
  )); 

// Update users
usersRoute.put('/update',(req,res)=>{
    res.send('Update Routes');
});

// Delete Users
usersRoute.delete('/:id',(req,res)=>{
    res.send('Delete Routes');
 });
 
// Fetch Users
usersRoute.get('/',(req,res)=>{
    res.send('Fetch users');
})


module.exports = usersRoute; 