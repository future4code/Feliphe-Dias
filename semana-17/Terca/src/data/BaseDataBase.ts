import Knex from 'knex';
import knex from 'knex';
import env from 'dotenv'

env.config();

export default class BaseDataBase {
    private app: Knex | null = null;
    
    protected async getConnection(): Promise<any>{
        const connection =  knex({
            client: "mysql",
            connection:{
                host: process.env.DB_HOST,
                port: 3306 || process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
            }
        })
        return connection;
    }
} 