const express = require("express");
const Topic = require("../models/Topic");
const Post = require("../models/Post");

const topicRouter = express.Router();

// Get all topics
// Filter by 'category' and/or 'user'
// Sorted by most recently updated first
topicRouter.get("/", (req, res, next) => {
	const filters = {};
	if (req.query) {
		if (req.query.user) {
			filters.user = req.query.user;
		}
		if (req.query.category) {
			filters.category = req.query.category;
		}
	}
	Topic.find(filters, {$sort: {lastUpdated: -1}}, (err, topics) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(200).send(topics);
	});
});

// Get a specific topic and its posts sorted by oldest first
topicRouter.get("/:topicId", (req, res, next) => {
	const {topicId} = req.params;
	Topic.findById(topicId, (err, topic) => {
		if (err) {
			res.status(500);
			return next(err);
		} else if (!topic) {
			res.status(404);
			return next(new Error("Topic not found."));
		}
		Post.find({topic: topicId}, {$sort: {postDate: 1}}, (err, posts) => {
			if (err) {
				res.status(500);
				return next(err);
			}
			res.status(200).send({topic, posts});
		});
	});
});

module.exports = topicRouter;