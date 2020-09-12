module.exports = async function() {
	try {
		const fs = require("fs");
		const fileprint = process.env.PROJECT_ROOT + "/src/plugins/plantomium.example.txt";
		fs.writeFileSync(fileprint, "The plugin was added successfully.", "utf8");
	} catch(error) {
		throw error;
	}
}