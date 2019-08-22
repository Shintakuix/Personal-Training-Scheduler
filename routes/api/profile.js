const express = require("express");
const router = express.Router();
const UserProfile = require("../../models/Profile");
const validateProfileInput = require("../../validation/profile");


//Routes
router.post("/profile", (req, res) => {   
  const { errors, isValid } = validateProfileInput(req.body);
      if (!isValid) {
      return res.status(400).json(errors);
    }
    
    UserProfile.insertOne({ 
      age: req.body.age,
      weight: req.body.weight,
      height: req.body.height
      })
/*       .then(profile => {
        if (!profile)
        const newProfile = new Profile({
          age: req.body.age,
          weight: req.body.weight,
          height: req.body.height
      })
  }); */
});

  module.exports = router;