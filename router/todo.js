const express = require("express");
const router = express.Router();
const ToDo = require("../model/todo");
const validateTodo = require("../validator/todo");

router.get("/", async (req, res) => {
  const todos = await ToDo.find();
  res.status(200).send(todos);
});

router.post("/", async (req, res) => {
  const { error } = validateTodo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const todo = new ToDo({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });
  await todo.save();
  res.status(200).send(todo);
});

router.put("/:id", async (req, res) => {
  const { error } = validateTodo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const todo = await ToDo.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
    },
    { new: true }
  );
  if (!todo) return res.status(404).send("The todo with the given ID was not found.");
  res.status(200).send(todo);
});

router.delete("/:id", async (req, res) => {
  const todo = await ToDo.findByIdAndDelete({ _id: req.params.id });
  if (!todo) return res.status(404).send("The todo with the given ID was not found.");
  res.status(200).send(todo);
});

module.exports = router;
