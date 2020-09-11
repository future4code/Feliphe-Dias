import dotenv from 'dotenv';
import DB from './DB_HANDLE';
import App from './EndPoints';

dotenv.config();

const DB_HANDLE = new DB( 
    process.env.DB_HOST,
    process.env.DB_PORT,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.DB_NAME,
);
const app = new App(DB_HANDLE);

app.startServe();