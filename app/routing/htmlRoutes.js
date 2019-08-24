var path = require("path");

//console.log("HTML Routes ready");
function htmlRoutes(app) {
	// if user enters survey in URL or presses survey button, serves the survey HTML file
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// fallback use route for homepage
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};

module.exports = htmlRoutes;