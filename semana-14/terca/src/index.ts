// A: utilizamos o process.argv para acessar os parametros
// B:

// console.log("ola " + process.argv[2] + " voce tem " + process.argv[3] + ' anos');

// C:

const nome : string = process.argv[2];
const idade : number = Number(process.argv[3]);

console.log(`Olá, ! ${nome} Você tem ${idade} anos. Em sete anos você terá  ${idade + 7}`);