import express, {Request, Response} from 'express';
import UserDataBase from '../data/UsersDataBase';
import HashManager from '../services/Hash';
import {v4} from 'uuid';

const app = express();

const db = new UserDataBase();

export const signUp = async (req : Request, res: Response ) =>{
    try {
        const criptPaswd: string = await HashManager.generate(req.body.password);
        await db.createUser(v4(), req.body.email, criptPaswd);
        res.status(200).send("Criado com sucesso!");
    } catch(error) {
        res.status(400).send("Ouve um erro na sua requisição");
    }
}

export const login = async (req : Request, res: Response ) =>{
    try {
        HashManager.compare(req.body.password);
        res.status(200).send();
    } catch(error) {
        res.status(400).send("Ouve um erro na sua requisição");
    }
}