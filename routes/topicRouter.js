const express = require("express");
const Topic = require("../models/Topic");
const Post = require("../models/Post");

const topicRouter = express.Router();

topicRouter.get("/:categoryId", (req, res, next) => {
	Topic.find({category: req.params.categoryId}, null, {$sort: {lastUpdated: -1}}, (err, topics) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.send(topics);
	});
});

module.exports = topicRouter;