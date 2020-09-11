import express from 'express';
import {AddressInfo} from 'net';
import DB from './DB_HANDLE';




export default class App {
    private db: DB;
    private app = express();
    
    constructor( db: DB){
        this.db = db;
    }

   startServe(){
        const server = this.app.listen( 3000, () =>{
            if(server){
                const address = server.address() as AddressInfo;
                console.log(`Server is running in http://localhost: ${address.port}`);
            }else{
                console.error('failure upon starting the server');
            }
        }) 
    }

    createUser(){
        
    }
}