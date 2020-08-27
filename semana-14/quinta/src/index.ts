import {
    getAllSubscribers,
    createNew,
    sentNotifications,
    createUser,
    publishNews,
    getAllNotifications,
    } from './Promises'

// 1
// A esse end point 'https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all
// B pela sintaxe function(): Promise<any[]>
// C resposta está em  ./src/Promises linha 10;

// 2
// A: linha 19. além do comportamento do this dentro da função nomeada diferir de uma não nomeada, na primeira
// o indentificador async vem antes do indentificador 'function' e na segunda antes dos '()'

// B: resposta está em  ./src/Promises linha 22;

// 3
// A: não teremos nenhum problema deis de que o retorno da função respeite a tipagem indicada
// B: devemos mapear o retorno de uma Promise<any> caso seja preciso especificar o que retornar.
// C: resposta está em  ./src/Promises linha 32

// 4 
// A: Essa função é do tipo void pois não possui retorno
// B : resposta está em  ./src/Promises linha 37

// 5
// A: os metodos de array( forEach, filter, map) não funciona bem com o 'await' então NÃO devemos utilizalos juntos
// B: resposta está em  ./src/Promises linha 51

// 6
// A: O promisse.all recebe um array de promises e executa todas elas ao mesmo tempo.
// B: economizamos em processamento e tempo de operação, pois com duas promises não seria um problema executalas
// uma por uma, mas com a escala do programa( aumento do  numero de processos) teremos um sério probelma na aplicação.
// C: resposta está em  ./src/Promises linha 74

// 7
// A: resposta está em  ./src/Promises linha 96
// B: resposta está em  ./src/Promises linha 110
// C: resposta está em  ./src/Promises linha 125
async function main(): Promise<void>{
    try{
        const user = await getAllSubscribers();
        // const newsResponse: any = await createNew('Teste', 'contente teste', Date.now());
        // await sentNotifications(user, 'Esse trabalho tá chato, 6 Promisse.all.');
        // await createUser('JoãoCansando', 'emai@email.com');
        // await publishNews("O kiko roubou pão na casa do joão", "preguicita", Date.now());
        const notifications = await getAllNotifications();
        console.log(notifications);
    }catch(e){
        console.log(e)
    }
}

main();