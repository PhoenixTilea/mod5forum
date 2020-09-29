const mongoose = require("mongoose");
const { Schema } = mongoose;

const topicSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	board: {
		type: Schema.Types.ObjectId,
		ref: "Board",
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	initPost: {
		type: Schema.Types.ObjectId,
		ref: "Post",
		required: true
	},
	lastPost: {
		type: Schema.Types.ObjectId,
		ref: "Post",
		required: true
	}
});

module.exports = mongoose.model("Topic", topicSchema);