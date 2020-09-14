import kenex from 'knex'
import Knex from 'knex'
import env from 'dotenv';

env.config();

const data = process.env;

export default abstract class BaseDataBase{
    private  static connection: Knex | null = null;

    protected getConnection(): Knex {
        if(!BaseDataBase.connection){
            BaseDataBase.connection = kenex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                  },
            })
        }
        return BaseDataBase.connection;
    }
}