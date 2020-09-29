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
	"user" : {
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
		type: Number,
		default: 0
	},
	downVotes: {
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model("Post", postSchema);