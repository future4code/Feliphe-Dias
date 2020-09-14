import baseDataBase from './baseDataBase';

const table = "USERS"

export default class userDataBase extends baseDataBase {

   async createUser(id: string, email: string, password: string){
     await this.getConnection()
    .insert({id, email, password}).into(table);
     
    }
}