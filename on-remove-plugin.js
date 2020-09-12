module.exports = async function() {
	try {
		const fs = require("fs");
		const fileprint = process.env.PROJECT_ROOT + "/src/plugins/plantomium.example.txt";
		fs.unlinkFileSync(fileprint);
	} catch(error) {
		throw error;
	}
}