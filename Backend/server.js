const express = require("express");
const dotenv = require('dotenv')
// const mongoose = require('mongoose');
// const User = require("./models/User");
const error = require('./middleware/errorMiddlewareHandler');
const usersRoute = require("./routes/userRoute");
const bookRouter = require("./routes/bookRoute");
// const dbConnect = require("./config/dbConnect");

dotenv.config();
require('./config/dbConnect')();

const app = express();

//Passing body data
app.use(express.json());

// Routes
app.use('/api/users', usersRoute);

// books
app.use('/api/books',bookRouter);

// console.log(process.env);

// Error middleware
app.use(error.errorMiddlewareHandler);

//Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is up and running ${PORT}`);
})