const Todo = require("../Models/todoModel");

// get all todo tasks
const getAllTodos = async (req, res) => {
  // DB query
  const todos = await Todo.find({});
  // send back full list of todo tasks
  res.status(200).json({ todos });
};

// create new todo task
const createTodo = async (req, res) => {
  // DB query to create new todo
  const todo = await Todo.create(req.body);
  // return the new todo with the response
  res.status(201).json({ todo });
};

/* Update the selected todo */
const updateTodo = async (req, res) => {
  const { id: todoID } = req.params;

  const todo = await Todo.findOneAndUpdate({ _id: todoID }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ todo });
};

// delete single todo
const deleteTodo = async (req, res) => {
  const { id: todoID } = req.params;
  const todo = await Todo.findOneAndDelete({ _id: todoID });
  res.status(200).json({ todo });
};

// get single todo
const getTodo = async (req, res) => {
  const { id: todoID } = req.params;
  const todo = await Todo.findOne({ _id: todoID });
  res.status(200).json({ todo });
};

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo, getTodo };
