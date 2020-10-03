
import Knex from 'knex';
import knex from 'knex';

export default class BaseDB {
	getConnection(): Knex{
		return knex({
			client: "mysql",
			connection:{
				host: process.env.DB_HOST,
				database: process.env.DB_NAME,
				user: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
			}
		});
	};

	destroyConnection(){
		this.getConnection().destroy();
		console.log("connection has been destroyed");
	};
		
}