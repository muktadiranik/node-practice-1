const Joi = require("joi");

function validateTodo(todo) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().valid("pending", "completed").required(),
  });

  return schema.validate(todo);
}

module.exports = validateTodo;
