const mongoose = require("mongoose");
const { Schema } = mongoose;

const topicSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: "Category",
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
	lastUpdated: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model("Topic", topicSchema);