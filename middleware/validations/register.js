const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
// Name checks
  if (Validator.isEmpty(data.firstName)) {
    errors.data = "Name field is required";
  }
  if (Validator.isEmpty(data.phoneNumber)) {
    errors.data = "Phone Number field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.data = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.data = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.data = "Password field is required";
  }
if (Validator.isEmpty(data.password2)) {
    errors.data = "Confirm password field is required";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.data = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.data = "Passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};