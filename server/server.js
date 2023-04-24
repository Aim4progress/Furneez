const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/connectDB");

const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const port = process.env.PORT || 5000;

const app = express();

// ( *** ALWAYS SPECIFY IT BEFORE THE ROUTES ***)
// Handling body data that is sent from the client
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));

// Error Middleware (Put here 👇 at the end of all the routes)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
