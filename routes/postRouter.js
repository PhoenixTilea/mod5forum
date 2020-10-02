const express = require("express");
const Post = require("../models/Post");

const postRouter = express.Router();

// get all posts filtered by 'topic' or 'user'
postRouter.get("/", (req, res, next) => {
	const filters = {};
	if (req.query) {
		if (req.query.topic) {
			filters.topic = req.query.topic;
		}
		if (req.query.user) {
			filters.user = req.query.user;
		}
	}
	Post.find(filters, (err, posts) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(200).send(posts);
	});
});

// get a specific post
postRouter.get("/:postId", (req, res, next) => {
	const {postId} = req.params;
	Post.findOne({_id: postId}, (err, post) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(200).send(post);
	});
});



module.exports = postRouter;