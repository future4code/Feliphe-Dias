/*
    EXERCÍCIO 1
    A:  
        1 - Criando uma variavel sum e atribuindo o valor 0.      
        2 - cria um laço do tipo "for" com um index i e atribui o valor 0 a ele, enquanto i for menor
            que 15 continua a interação, adiciona 1 a variavel sum a cada interação, adiciona 1 a variavel i 
            ao final de cada interação.
        3 - exibe no console o valor da variavel sum.
    
    EXERCÍCIO 2
       A - adiciona um item ao final do array.
       B - imprimi todos os multiplos de 5
       C -  se numero fosse 3 iria imprimir todos os multiplos de 3, se fosse 4 os multiplos de 4.

*/

//  EXERCÍCIO 3

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let newArray = [];
// A 
let menor = array[0]; let maior = array [0];

for ( let i of array){
    for( let c of array){
        if( i < menor && i < c) menor = i;
        if( i > maior && i > c) maior = i;
    }
    
}
console.log(`"O maior número é ${maior} e o menor é ${menor}"`);

// B

for( let i of array){
    newArray.push(i/10);
}
console.log(newArray);

//C
newArray = [];
for(let i of array){
    if( i % 2 === 0) newArray.push(i);
}

console.log(newArray);

// D

for( let i in array){
    console.log(`'O elemento do index ${i} 0 é ${array[i]}',`);   
}


/*
DESAFIOS:
    DESAFIO 1: 
        vai imprimir quatro linha cada uma com uma quantidade de zero igual a o numero da linha.
*/
//  DESAFIO 2:

console.log("Player 1 vs Player 2");
let player1 = Number(prompt("Jogador 1:\nEscolha um numero?" ));
console.log("Vamos jogar!");
let player2 = null;
let tentativas = 0;


if( !(Number.isNaN(player1)) ){
    while( !(player1 === player2) ){
        ++tentativas;
        player2 = Number(prompt("Jogador 2:\ntente adivinhar o numero"));
        if( !(Number.isNaN(player2)) ){
            if(player2 > player1){ 
                console.log("O número chutado foi:" + player2);
                console.log("Errrrrrrrou, é maior");
            }
            if(player2 < player1){ 
                console.log("O número chutado foi:" + player2);
                console.log("Errrrrrrrou, é menor");
            }
        }else{ 
            console.log("valor invalido");
            --tentativas;
        }
    }
    console.log(`Acertou!!\nO número de tentativas foi: ${tentativas}`)
}else console.log("Valor invalido");



//DESAFIO 3

let cpu = Math.floor( (Math.random() * 100) + 1); //GERA UM numero entre 0 e 100;
console.log("Player VS CPU\nVamos jogar!");
player1 = null;
tentativas = 0;



while( !(cpu === player1) ){
    ++tentativas;
    player1 = Number(prompt("Jogador 2:\ntente adivinhar o numero"));
    if( !(Number.isNaN(player1)) ){
        if(cpu < player1){ 
            console.log("O número chutado foi:" + player1);
            console.log("Errrrrrrrou, é maior");
        }
        if(cpu > player1){ 
            console.log("O número chutado foi:" + player1);
            console.log("Errrrrrrrou, é menor");
        }
    }else{ 
        console.log("valor invalido");
        --tentativas;
        }
}
console.log(`Acertou!!\nO número de tentativas foi: ${tentativas}`)
 
// foi até facil implementar. a questão toda é ter vontade de ir atrás da informação.