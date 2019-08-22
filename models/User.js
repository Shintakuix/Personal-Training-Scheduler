const mongoose = require('mongoose');
/* const bcrypt = require('bcrypt'); */

//Create Schema
const UserSchema = new mongoose.Schema({
  
  /*firstName: {
     type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  isDeleted: {
    type: Boolean,
    default: false */
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
});

/* UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
    }; */

const User = mongoose.model('users', UserSchema);
module.exports = User;
