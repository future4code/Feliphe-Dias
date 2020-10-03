import dotenv from 'dotenv'
import express from 'express'
import { AddressInfo } from 'net';



dotenv.config()


const app = express();

const server = app.listen( process.env.PORT || 3306, ()=>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running at ${server.address}`);
    }else{
        console.error(`Can't start the server`)
    }
})

