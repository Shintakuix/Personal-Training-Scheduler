const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.age = !isEmpty(data.age) ? data.age : "";
  data.weight = !isEmpty(data.weight) ? data.weight : "";
  data.height = !isEmpty(data.height) ? data.height : "";
  
// Name checks
  if (Validator.isEmpty(data.age)) {
    errors.age = "Age field is required";
  }
  if (Validator.isEmpty(data.weight)) {
    errors.weight = "Weight field is required";
  }
  if (Validator.isEmpty(data.height)) {
    errors.height = "Height field is required";
  }

return {
    errors,
    isValid: isEmpty(errors)
  };
};