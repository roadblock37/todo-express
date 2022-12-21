const express = require("express");
const app = express();
const connectDB = require("./DB/connectDB");
const notFound = require("./Middleware/notFound");

require("dotenv").config();

// middleware
app.use(express.json());

// routes
// app.use('/api/v1/todo', todo)

app.use(notFound);

// port variable to listen on port used by host or localhost by default
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

// start connection
start();
