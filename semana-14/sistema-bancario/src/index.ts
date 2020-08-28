import * as fs from 'fs'
import {
  getInfo,
} from './dbHandle'

// export function readDatabase(): any {
//   try {
//     const fileData: string = fs.readFileSync('./data.json').toString()
//     return JSON.parse(fileData)
//   } catch (error) {
//     console.log("Erro ao ler a base de dados: " + error.message)
//     return []
//   }
// }

// export function writeToDatabase(data: any): void {
//   try {
//     const dataAsString: string = JSON.stringify(data, null, 2)
//     fs.writeFileSync('./data.json', dataAsString)
//   } catch (error) {
//     console.log("Erro ao salvar os dados: " + error.message)
//   }

const stdin = process.openStdin();


type user = {
  name: string,
  age: number,
  cpf: string,
  birthDay: string,
}


  // const userInfo: user = {
  //       name,
  //       age,
  //       cpf,
  //       birthDay,
  // }
  // return {};
// } 

function main(): void{
  console.log("Bem vindo ao F4Bank.\n Por favor, selecione uma da opções:")
  const option: number = Number(getInfo(`1 - Criar conta.\n2 - Consultar saldo\n3 - Adicionar saldo\n4 - Pagar conta\n`));
   
   
}


main();