module.exports = async function() {
	try {
		const fs = require("fs-extra");
		const fileprint = process.env.PROJECT_ROOT + "/docs/plugins/plantomium/example/README.md";
		fs.outputFileSync(fileprint, "The plugin was added successfully.", "utf8");
	} catch(error) {
		throw error;
	}
}