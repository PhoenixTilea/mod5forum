const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const expressJwt = require("express-jwt")
require("dotenv").config()

//Database connection
mongoose.connect("mongodb://localhost:27017/mod-5-forum-db",
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
).then(() => console.log("Successfully connected to the database"))
	.catch(err => console.log(err));

//Middleware
const app = express();
app.use(morgan("dev"));
app.use(express.json());


app.use(require("./middle/error"));

//Routes
app.use("/auth", require("./routes/authRouter"))
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }))
// app.use(//api/etc for all other routes to require authentication first)



const port = process.env.PORT || 8000;
app.listen(() => console.log(`The server is listening on port ${port}`));


//branch