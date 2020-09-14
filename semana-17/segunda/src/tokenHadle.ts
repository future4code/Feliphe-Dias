import * as jwt from "jsonwebtoken";
import env from 'dotenv'

env.config();

export default class tokenHandle{
    public static generate(id: string): string{
        return jwt.sign(
            {
                id
            },
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.EXPIRE_IN as string,
        }
    );
    }
}