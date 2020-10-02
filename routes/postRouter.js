const express = require("express");
const Post = require("../models/Post");

const postRouter = express.Router();

// get all posts filtered by 'topic' or 'user'
// Default sort is ascending, but 'sort' query can be specified as 'desc' to change this
postRouter.get("/", (req, res, next) => {
	const filters = {};
	const sort = {$sort: { postDate: 1}};
	if (req.query) {
		if (req.query.topic) {
			filters.topic = req.query.topic;
		}
		if (req.query.user) {
			filters.user = req.query.user;
		}
		if (req.query.sort === "desc") {
			sort = {$sort : {postDate: -1}};
		}
	}
	Post.find(filters, sort, (err, posts) => {
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