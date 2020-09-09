import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const connection = knex({
    client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT || "3306"),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
    },
  });

// const getActorById = async (id: string): Promise<any> => {
//     try{
//         const result = await connection.raw(`
//           SELECT * FROM Actor WHERE id = '${id}'
//         `)
      
//           console.log('sucesso');
//           return result[0][0];
//     }catch(erro){
//         console.error(erro);
//     }
// }

// const getActorByName = async (name: string): Promise<any> => {
//   try{
//       const result = await connection.raw(`
//         SELECT * FROM Actor WHERE name = '${name}'
//       `)
    
//         console.log('sucesso');
//         return result[0][0];
//   }catch(erro){
//       console.error(erro);
//   }
// }


const getActorByGender = async (gender: string): Promise<any> => {
  try{
      const result = await connection.raw(`
        SELECT * FROM Actor WHERE gender = '${gender}'
      `)
    
        console.log('sucesso');
        return result[0];
  }catch(erro){
      console.error(erro);
  }
}

async function main(){
   const a = await getActorByGender('female');
    console.log(a);
}


main();