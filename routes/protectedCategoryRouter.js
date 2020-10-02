const express = require("express");
const Category = require("../models/Category");
const Topic = require("../models/Topic");
const Post = require("../models/Post");

const categoryRouter = express.Router();

categoryRouter.post("/", (req, res, next) => {
	const newCat = new Category(req.body);
	newCat.save((err, category) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(201).send(category);
	});
});

categoryRouter.route("/:categoryId")
.put((req, res, next) => {
Category.findOneAndUpdate({_id: req.params.categoryId}, req.body, {new: true}, (err, category) => {
	if (err) {
		res.status(500);
		return next(err);
	}
	return res.status(202).send(category);
});
})
// Delete a category along with all topics and posts beneath it
.delete((req, res, next) => {
	Category.findOneAndDelete({_id: req.params._id}, (err, category) => {
		if (err) {
			res.status(500);
			return next(err);
		} else if (!category) {
			res.status(404);
			return next(new Error("Category not found."));
		}
		const catId = category._id;
		Topic.findAndDelete({category: catId}, (err, topics) => {
			if (err) {
				res.status(404);
				return next(err);
			}
			for (let i = 0; i < topics.length; i++) {
				const topicId = topics[i]._id;
				Post.findAndDelete({topic: topicId}, (err, posts) => {
					if (err) {
						res.status(500);
						return next(err);
					}
				});
			}
		});
		return res.status(203).send({message: `${category.title} and all associated topics and posts have been deleted.`});
	});
});

module.exports = categoryRouter;