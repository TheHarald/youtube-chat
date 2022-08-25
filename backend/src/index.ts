const application = require("./express/app");
const PORT:number = 3001;



async function init() {

	console.log(`Starting Sequelize + Express example on port ${PORT}...`);

	application.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}. http://localhost:3001/api/`);
	});
}

init()



