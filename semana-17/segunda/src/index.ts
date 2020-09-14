import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import userDataBase from "./userDatabe";
import idHandle from "./IdHandle";
import tokenHandle from "./tokenHadle";


dotenv.config();

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


app.put('/sigup',)

