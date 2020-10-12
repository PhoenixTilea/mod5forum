const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
	text: {
		type: String,
		required: true
	},
	topic: {
		type: Schema.Types.ObjectId,
		ref: "Topic",
		required: true
	},
	user : {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	postDate: {
		type: Date,
		default: Date.now()
	},
	lastEdited: {
		type: Date
	},
	upVotes: {
	type: [{
	type: Schema.Types.ObjectId,
	ref: "User"
}]
	},
	downVotes: {
		type: [{
	type: Schema.Types.ObjectId,
	ref: "User"
}]
	}
});

postSchema.methods.toggleUpVote = function (user, callback) {
	if (this.upVotes.includes(user)) {
		this.upVotes.pull(user);
	} else {
		this.upVotes.addToSet(user);
	}
	this.save(callback);
};
postSchema.methods.toggleDownVote = function (user, callback) {
	if (this.downVotes.includes(user)) {
		this.downVotes.pull(user);
	} else {
		this.downVotes.addToSet(user);
	}
	this.save(callback);
};

module.exports = mongoose.model("Post", postSchema);