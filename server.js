const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const expressJwt = require("express-jwt");
require("dotenv").config();
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
.then(() => console.log("Successfully connected to the database"))
.catch(err => console.log(err));
const cors = require('cors')


//Middleware
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

// Public routes
app.use("/categories", require("./routes/categoryRouter"));
app.use("/topics", require("./routes/topicRouter"));
app.use("/posts", require("./routes/postRouter"));
app.use("/auth", require("./routes/authRouter"));

// Protected/signed routes
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }))
app.use("/api/categories", require("./routes/protectedCategoryRouter"));
app.use("/api/topics", require("./routes/protectedTopicRouter"));
app.use("/api/posts", require("./routes/protectedPostRouter"));
app.use("/api/user", require("./routes/protectedUserRouter"));

// Error catch-all
app.use(require("./middle/error"));

const port = process.env.PORT || 8000;
app.listen(port,() => console.log(`The server is listening on port ${port}`));

