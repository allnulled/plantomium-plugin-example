module.exports = async function() {
	try {
		const fs = require("fs-extra");
		const fileprint = process.env.PROJECT_ROOT + "/docs/plugins/plantomium/example/README.md";
		fs.removeFileSync(fileprint);
	} catch(error) {
		throw error;
	}
}