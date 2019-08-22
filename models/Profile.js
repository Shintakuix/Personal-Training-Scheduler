const mongoose = require('mongoose');


//Create Schema
const ProfileSchema = new mongoose.Schema({
  

    age: {
      type: String,
      required: true
    },
    weight: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now

  },
});

const UserProfile = mongoose.model('profile', ProfileSchema);
module.exports = UserProfile;
