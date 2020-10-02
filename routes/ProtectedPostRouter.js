const express = require("express");
const Post = require("../models/Post");

const postRouter = express.Router();

// Post a reply to a topic
postRouter.post("/:topicId", (req, res, next) => {
	req.body.topic = req.params.topicId;
	req.body.user = req.user._id;
	const newPost = new Post(req.body);
	newPost.save((err, savedPost) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(201).send(savedPost);
	});
});

// Edit or delete a post
postRouter.route(".postId")
.put((req, res, next) => {
	Post.findOneAndUpdate({_id: req.params.postId}, req.body, {new: true}, (err, post) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(202).send(post);
	});
})
.delete((req, res, next) => {
	Post.findOneAndDelete({_id: req.params.postId}, (err, post) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(203).send({message: "Post deleted."});
	});
});

module.exports = postRouter;