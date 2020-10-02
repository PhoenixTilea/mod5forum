const express = require("express");
const Topic = require("../modeuls/Topic");
const Post = require("../models/Post");

const topicRouter = express.Router();

// Create a new topic under the given category (must include initial post data as well)
topicRouter.post("/:categoryId", (req, res, next) => {
	const topic = req.body.topic;
	topic.user = req.user._id;
	topic.category = req.params.categoryId;
	const post = req.body.post;
	post.user = req.user._id;
	const newTopic = new Topic(topic);
	newTopic.save((err, savedTopic) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		post.topic = savedTopic._id;
		const newPost = new Post(post);
		newPost.save((err, savedPost) => {
			if (err) {
				res.status(500);
				return next(err);
			}
			return res.status(201).send({topic: savedTopic, post: savedPost});
		});
	});
});

topicRouter.route("/:topicId")
.put((req, res, next) => {
	Topic.findOneAndUpdate({_id: req.params.topicId}, req.body, {new: true}, (err, topic) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(202).send(topic);
	});
})
.delete((req, res, next) => {
	Topic.findOneAndDelete({_id: topicId}, (err, topic) => {
		if (err) {
			res.status(500);
			return next(err);
		} else if (!topic) {
			res.status(404);
			return next(new Error("Topic not found."));
		}
		Post.findAndDelete({topic: topic._id}, (err, posts) => {
			if (err) {
				res.status(500);
				return next(err);
			}
			return res.status(203).send({message: `${topic.title} and all associated posts have been deleted.`});
		});
	});
});

module.exports = topicRouter;