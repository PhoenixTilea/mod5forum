const express = require("express");
const Post = require("../models/Post");
const Topic = require("../models/Topic");

const postRouter = express.Router();

// Post a reply to a topic
postRouter.post("/:topicId", (req, res, next) => {
	const topicId = req.params.topicId;
	Topic.findByIdAndUpdate(topicId, {lastUpdated: Date.now()}, {new: true}, (err, topic) => {
		if (err) {
			res.status(500);
			return next(err);
		} else if (!topic) {
			res.status(404);
			return next(new Error("Topic not found."));
		}
		const post = req.body;
		post.topic = topicId;
		post.user = req.user._id;
		const newPost = new Post(post);
		newPost.save((err, savedPost) => {
			if (err) {
				res.status(500);
				return next(err);
			}
			return res.status(201).send(savedPost);
		});
	});
});

// Edit or delete a post
postRouter.route("/:postId")
.put((req, res, next) => {
	req.body.lastEdited = Date.now();
	Post.findByIdAndUpdate(req.params.postId, req.body, {new: true}, (err, post) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(202).send(post);
	});
})
.delete((req, res, next) => {
	Post.findByIdAndDelete(req.params.postId, (err, post) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(203).send({message: "Post deleted."});
	});
});

module.exports = postRouter;