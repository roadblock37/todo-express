require("dotenv").config();
const mockData = require("./mockData");
const Todo = require("./Models/todoModel");
const connectDB = require("./DB/connectDB");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Todo.create(mockData);
    console.log("database successfully populated");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
