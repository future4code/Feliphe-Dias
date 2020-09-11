import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();




export default class DB {
    private connection: any = '';
    private static  id: number = 0;
    constructor(
        DB_HOST: any,
        DB_PORT: any,
        DB_USER: any,
        DB_PASSWORD: any,
        DB_NAME: any,
    ){
       this.connection = knex({
            client: 'mysql',
            connection: {
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT || "3306"),
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
              }
          });
    };

 createUser = ( name: string, nickname: string, email: string) => {
       if(name === '' || nickname === '' || email === ''){
         throw new Error("The name, nickName and email cannot be empty ou null");
       }
        else {
            this.connection.raw(
                `INSERT INTO users(id, name, nickName, email )
                VALUES(
                    ${DB.id},
                    ${name},
                    ${nickname},
                    ${email})`
                );
            DB.id += 1;
        }       
    };
}