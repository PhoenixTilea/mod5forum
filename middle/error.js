module.exports = (err, req, res, next) => {
	if (err.name === "UnauthorizedError") {
		res.status(err.status);
	}
	console.log(err.message);
	return res.send({error: err.message});
};