const application = require("./express/app");
const PORT:number = 3001;
const db = require("./sequelize");


async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await db.sync({force:false});
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
	}
}



async function init() {
	await assertDatabaseConnectionOk();

	console.log(`Starting Sequelize + Express example on port ${PORT}...`);

	application.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}. http://localhost:3001/api/`);
	});
}

init()



