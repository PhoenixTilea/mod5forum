const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		lower: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	joinDate: {
		type: Date,
		default: Date.now()
	},
	upVotedPosts: {
		type: [{
			type: Schema.Types.ObjectId,
			ref: "Post"
		}],
		default: []
	},
	downVotedPosts: {
		type: [{
			type: Schema.Types.ObjectId,
			ref: "Post"
		}],
		default: []
	},
	imgUrl: String
});

module.exports = mongoose.model("User", userSchema);