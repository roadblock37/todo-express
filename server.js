const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./DB/connectDB");
const notFound = require("./Middleware/notFound");
const todos = require("./Routes/todoRoute");

require("dotenv").config();

// middleware
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());

// routes
app.use("/api/v1/todos", todos);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFound);

// port variable to listen on port used by host or localhost by default
const port = process.env.PORT || 5000;

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
