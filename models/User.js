const mongoose = require('mongoose');


//Create Schema
const UserSchema = new mongoose.Schema({
  

    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    age: {
      type: String,
      required: false
    },
    weight: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: false
    },
    day : {
      type:String,
      required:false
    },

    time : {
      type:String,
      required:false
    }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
