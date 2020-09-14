import { v4 } from "uuid";

export default class idHandle{
    public static generate(): string {
        return v4();
    }
}