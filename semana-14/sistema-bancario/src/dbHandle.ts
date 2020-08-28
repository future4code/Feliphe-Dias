
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


export function getInfo(mensage: string): any {
    let data: string = '';

    rl.question(mensage, (d: any) => {
        data = d;
        rl.close();
    })
    return data;
}
  