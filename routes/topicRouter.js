const express = require("express");
const Topic = require("../models/Topic");

const topicRouter = express.Router();

// Get all topics
// Filter by 'category' and/or 'user'
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
	Topic.find(filters, (err, topics) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(200).send(topics);
	});
});

// Get a specific topic with its initial post included
topicRouter.get("/:topicId", (req, res, next) => {
	const {topicId} = req.params;
	Topic.findOne({_id: topicId}, (err, topic) => {
		if (err) {
			res.status(500);
			return next(err);
		} else if (!topic) {
			res.status(404);
			return next(new Error("Topic not found."));
		}
		Post.findOne({_id: topic._initialPost}, (err, post) => {
			if (err) {
				res.status(500);
				return next(err);
			} else if (!post) {
				res.status(404);
				return next(new Error("Initial post not found."));
			}
			const resTopic = topic.toObject();
			resTopic.initialPost = post;
			res.status(200).send(topic);
		});
		
	});
});

module.exports = topicRouter;