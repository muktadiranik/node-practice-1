const Joi = require("joi");

function validateLogin(login) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  return schema.validate(login);
}

module.exports = validateLogin;
