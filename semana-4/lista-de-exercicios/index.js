/*
    INTERPRETAÇÃO DE CODIGO
    
    1:    
    a função recebe como parametro valorEmDolar.
    ela captura um prompt e converte o mesmo para Number e o armazena na variavel cotacao
    e retorna um string contendo "R$" concatenado com o produto de valorEmDOlar*Cotacao

    resultado no console/browser:
        prompt---->cotação informada 5,02 reais
        console -- > R$ 502,00

       2:
    a função recebe como parametro um string e um number
    o switch compara o parametro string
    para cada case do switch multiplica o parametro number por um valor diferente
    e o adiciona em uma variavel chama valorAposInvestimento
    caso  o parametro string não corresponda a nenhum case executa o default
    gerando um alert no navegor informando o usuario que o tipo de investimento está incorreto

    e por fim retorna a variavel valorAposInvestimento

    resultado no console/browser:
        console ----- > 165
        alert ----> TIPO DE INVESTIMENTO INFORMADO INCORRETO

      3:
    Declara um array numeros com 14 elementos do tipo number distintos entre si
    declara array1 e array2 ambaos vazios
    intera o array numeros usando o for of
    se o elemento interado for par adiciona o elemento no array1
    se nao for par adiciona no array2

    resultado no console/browser:
        console ---> "quantidade total de números 14"
        console ----> "6"
        console ---> "8"

   4:
    declara um array numeros com 25 elementos do tipo number distintos entre si
    declara duas variaveis numero1 e numero2 a primeira valendo Infitity(infinito)
    e a segunda 0
    percorre o array numero com um for of e para cada elemento dele 
    menor que numero1 a variavel numero1 recebe o valor do elemento autalmente interado
    e para cada elemento menor que a variavel numero dois é atribuido a ela o valor do elemento interado.
    
    resultado no console/browser:
        console ----> "-10"
        console ----> "1590"

    
*/

// EXERCICIOS DE LOGICA DE PROGRAMAÇÃO

// 1 - for ,for in, for of.

// const lista = [1,2,3,4,5]

// for(let i =0; i < lista.length; i++){
//     console.log(lista[i]);
// }

// for( let i in lista){
//     console.log(lista[i]);
// }

// for(let i of lista){
//     console.log(i);
// }
  
// 2:
// A - false
// B - true
// C - true
// d - true
// e - true

// 3:   Não. O valor de quantidadeDeNUmerosPares é undefined
// e o loop while não tem nenhuma operação que satisfaça a condição
// por isso ficara em um loop infinito imprimindo no console "0"

// correção da implementação
// const quantidadeDeNUmerosPares = Number(prompt("Digite um numero")) || 0;

// for( let i = 0; i < quantidadeDeNUmerosPares; i++){
//     console.log(i*2);
// }


// 4:
// function typeOfTriang(a,b,c){
//     a = Number(a) || 1;
//     b = Number(b) || 1;
//     c = Number(c) || 1;
//     if( a === b && a === c) return "Equilátero";
//     else if( a === b || a === c || b === c) return "Isósceles";
//     else return "Escaleno" 
// }


