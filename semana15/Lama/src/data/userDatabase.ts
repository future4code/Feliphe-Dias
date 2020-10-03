
import BaseDB from './baseDatabase'
import UserModel from '../model/userModel';

export default class UserDB extends BaseDB{
	private table: string = "users"
	
	async createUser(user: UserModel){
		try{
			await this.getConnection().insert(user).into(this.table);	
		}catch(e){
			throw new Error(e);
		}finally{
			this.destroyConnection();
		}
		
	}

	async getUserById(id: string): Promise<UserModel>{
		try{
			const result: UserModel  = await this.getConnection().select('*').where({id}).into(this.table);
			return 	result;
		}catch(e){
			throw new Error(e);
		}finally{
			this.destroyConnection();
		}
	}
	
	async getUserByEmail(email: string): Promise<UserModel>{
		try{
			const result: UserModel  = await this.getConnection().select('*').where({email}).into(this.table);
			return 	result;
		}catch(e){
			throw new Error(e);
		}finally{
			this.destroyConnection();
		}
	}

	async removeUserByEmail(email: string){
		try{
			await this.getConnection().delete().where({email}).into(this.table);
			
		}catch(e){
			throw new Error(e);
		}finally{
			this.destroyConnection();
		}
	}

	async removeUserById(Id: string){
		try{
			await this.getConnection().delete().where({Id}).into(this.table);
			
		}catch(e){
			throw new Error(e);
		}finally{
			this.destroyConnection();
		}
	}


}