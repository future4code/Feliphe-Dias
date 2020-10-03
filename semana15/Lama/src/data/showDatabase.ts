import BaseDB from  './baseDatabase';
import showModel from '../model/showModel';


export default class ShowDB extends BaseDB{
	private table: string = "users"
	
	async createShow(show: showModel){
		try{
			await this.getConnection().insert(show).into(this.table);	
		}catch(e){
			throw new Error(e);
		}finally{
			this.destroyConnection();
		}
		
	}

	async getShowById(id: string): Promise<showModel>{
		try{
			const result: showModel  = await this.getConnection().select('*').where({id}).into(this.table);
			return 	result;
		}catch(e){
			throw new Error(e);
		}finally{
			this.destroyConnection();
		}
	}
	
	async getShowByEmail(email: string): Promise<showModel>{
		try{
			const result: showModel  = await this.getConnection().select('*').where({email}).into(this.table);
			return 	result;
		}catch(e){
			throw new Error(e);
		}finally{
			this.destroyConnection();
		}
	}

	async removeShowByEmail(email: string){
		try{
			await this.getConnection().delete().where({email}).into(this.table);
			
		}catch(e){
			throw new Error(e);
		}finally{
			this.destroyConnection();
		}
	}

	async removeShowById(Id: string){
		try{
			await this.getConnection().delete().where({Id}).into(this.table);
			
		}catch(e){
			throw new Error(e);
		}finally{
			this.destroyConnection();
		}
	}
}