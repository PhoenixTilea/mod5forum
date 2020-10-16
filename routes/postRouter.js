const express = require("express");
const Post = require("../models/Post");

const postRouter = express.Router();
postRouter.get("/:topicId", (req, res, next) => {
Post.find({topic: req.params.topicId}, null, {$sort: {postDate: 1}}, (err, posts) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.send(posts);
	});
});

module.exports = postRouter;