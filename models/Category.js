const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	description: String
});

module.exports = mongoose.model("Category", categorySchema);