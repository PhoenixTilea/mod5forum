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

// Get a specific category and its topics
categoryRouter.get("/:categoryId", (req, res, next) => {
	const {categoryId} = req.params;
	Category.findById(categoryId, (err, category) => {
		if (err) {
			res.status(500);
			return next(err);
		} else if (!category) {
			res.status(404);
			return next(new Error("Category not found."));
		}
		Topic.find({category: categoryId}, {$sort: {lastUpdated: -1}}, (err, topics) => {
			if (err) {
				res.status(500);
				return next(err);
			}
			return res.status(200).send({category, topics});
		});
	});
});

module.exports = categoryRouter;