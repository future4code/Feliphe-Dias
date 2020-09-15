import Knex from 'knex';
import BaseDataBase from './BaseDataBase';

export default class UserDataBase extends BaseDataBase{
    private table: string = "USERS";

    async createUser(id: string, email: string, password: string){
        const connection: Knex = await this.getConnection();
        connection.insert({id, email, password}).into(this.table);
    }

    async getUser(id: string, email: string, password: string){
        const connection: Knex = await this.getConnection();
        connection.insert({id, email, password}).into(this.table);
    }
}