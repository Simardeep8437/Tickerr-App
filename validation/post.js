const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.title, { min: 10, max: 300 })) {
    errors.title = "Title of the Ticket must be between 10 and 300 characters";
  }

  if (!Validator.isLength(data.text, { min: 10, max: 1000 })) {
    errors.text = "Ticket Description must be between 10 and 1000 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.text = "Title field is required";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
