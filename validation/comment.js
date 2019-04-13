const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCommentInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 500 })) {
    errors.text = "Comment must be between 10 and 500 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Comment cannot send empty";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}; 
