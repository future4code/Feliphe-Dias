import HashManager from "./services/Hash";
import express from 'express';
import env from 'dotenv'
import { AddressInfo } from "net";

env.config();

const app = express();

async function main(){
     console.log( await HashManager.generate("naaa"));
}

app.put('/singUp', signUp)

const server = app.listen(process.env.PORT || 3000, ()=>{
     if(server){
          const address = server.address() as AddressInfo;
          console.log(`Server is running in http://localhost: ${address.port}`);
     }else{
          console.log('failure upon starting  server.')
     }
})

main();