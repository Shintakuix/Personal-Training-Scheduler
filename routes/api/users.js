const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateProfileInput = require("../../validation/profile");
const User = require("../../models/User");


//Routes
router.post("/register", (req, res) => {   
  const { errors, isValid } = validateRegisterInput(req.body);
      if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
  
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email }).then(user => {
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
        id: user.id,
        name: user.name
        };
 
    jwt.sign(
        payload,
        keys.secretOrKey,
        {
        expiresIn: 31556926
        },
        (err, token) => {
            res.json({
            success: true,
            token: "Bearer " + token
            });
        }
      );
    } 
    else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });
  
router.post("/profile", (req, res) => {   
  console.log("this is request3:" + req.body.id)
  
   
      User.findOneAndUpdate({ 
       _id: req.body.id
      
      },{
        $set:{
          age: req.body.age,
          weight: req.body.weight,
          height: req.body.height,

        }
      },      
      (err, sessions) => {
          if (err) {
              return res.send ({
                  success: false,
                  message: 'Error: Server error'
              });
          }
          
              return res.send ({
                  success: true,
                  message: 'Good'
              });
          });
        }
        
)

router.get("/information/:id", (req, res) => {   
  console.log("This is the request for users:" + req.params.id)

User.findOne( {
  _id: req.params.id
})

.then(dbUser => res.json(dbUser))
.catch(function(err) {
  res.json(err);
});

});


  
router.post("/schedule", (req, res) => {   
  console.log("this is request10:" + req.body.time + req.body.id + req.body.day )
       User.findOneAndUpdate({ 
       _id: req.body.id
        },{
        $set:{
          day:req.body.day, 
          time:req.body.time
        }
      },      
      (err, sessions) => {
          if (err) {
              return res.send ({
                  success: false,
                  message: 'Error: Server error'
              });
          } return res.send ({
                  success: true,
                  message: 'Good'
              });
          });
        }
      
)
 


  module.exports = router;