const express = require("express");
const Category = require("../models/Category");
const Topic = require("../models/Topic");
const Post = require("../models/Post");

const categoryRouter = express.Router();

// Get all categories
categoryRouter.get("/", (req, res, next) => {
	Category.find((err, categories) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(200).send(categories);
	});
});

module.exports = categoryRouter;