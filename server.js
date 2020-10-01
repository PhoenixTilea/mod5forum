const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
mongoose.connect("mongodb://localhost:27017/mod-5-forum-db",
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
).then(() => console.log("Successfully connected to the database"))
	.catch(err => console.log(err));

const app = express();
app.use(morgan("dev"));
app.use(express.json());


app.use(require("./middle/error"));

const port = process.env.PORT || 8000;
app.listen(() => console.log(`The server is listening on port ${port}`));