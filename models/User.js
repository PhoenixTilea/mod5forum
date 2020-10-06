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

//pre-save hook to encrypt user passwords on signup
userSchema.pre("save", function (next) {
	const user = this
	if (!user.isModified("password")) return next()
	bcrypt.hash(user.password, 10, (err, hash) => {
		if (err) return next()
		user.password = hash
		next()
	})
})

//method to check encrypted password on login
userSchema.methods.checkPassword = function (passwordAttempt, callback) {
	bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
		if (err) return callback(err)
		return callback(null, isMatch)
	})
}

// method to remove user's password for token/sending response to front end
userSchema.methods.withoutPassword = function () {
	const user = this.toObject()
	delete user.password
	return user
}


module.exports = mongoose.model("User", userSchema);