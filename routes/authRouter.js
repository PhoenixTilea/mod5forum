const express = require("express")
const authRouter = express.Router()
const User = require("../models/User.js")
const jwt = require("jsonwebtoken")

//Signup
// authRouter.post("/signup", (req, res, next) => {
//     //see if user exists
//     User.findOne
// })


module.exports = authRouter