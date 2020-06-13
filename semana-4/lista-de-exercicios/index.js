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

// 5:
// function ex5(n1,n2){
//     n1 = Number(n1) || 0
//     n2 = Number(n2) || 0
//     console.log(`Entrada:\n${n1} e ${n2}\n\nSAÍDA:\n`);
//     if( n1 > n2) console.log(`O maior é: ${n1}`);
//     else console.log(`O maior é: ${n2}`);
//     if( n1%2 === 0) console.log(`${n1} é divisível por ${n2}`);
//     else console.log(`${n1} não é divisível por ${n2}`);
//     if( n2%2 == 0) console.log(`${n2} é divisível por ${n1}`);
//     else console.log(`${n2} não é divisível por ${n1}`);
//     (n1-n2) < 0 ? console.log(`A diferença entre eles é ${(n1-n2)*-1}`) : console.log(`A diferença entre eles é ${(n1-n2)}`)  
// }


//EXERCICIOS DE FUNÇÕES

// 1:

// let array1 = [200,300,101,500000,-100,400,999,1345] 

// function menorMaior(a){
     
//      let menor = Infinity;
//      let maior = 0;
//      let newArray = [];
     
//      for(let i of a){
//          if( i < menor) menor = i;
//          if(i > maior) maior = i;
//      }
//     a = a.filter((e, i, a)=>{
//         return e !== menor
//     }).filter((e, i, a)=>{
//         return e !== maior
//     })

    
//      menor = Infinity;
//      maior = 0;

//      for(let i of a){
//         if( i < menor) menor = i;
//         if(i > maior) maior = i;
//     }
//     console.log("segundo maior", maior);
//     console.log("segundo menor", menor);
     
// }
// menorMaior(array1);

// let f = function(){
//     alert("Hello Labenu");
// }
// f();

//EXERCICIOS DE OBJETOS

/* 
1:
    Objetos são formas de representar dados mais próxima da nossa realidade, uma maniera até mais "organica de representação".
    Os objetos facilitam a reutilização de codigo. você não precisa saber como é feito cada obejeto só conhecer os metodos e propriedades dele.
    Os arrays são estruturas de dados como um vetor.  ele nos permite armazenar elementos dentro dele, cada elemento possui um index que vai de n0,n1,n...
    Objetos são ideias quando o codigo necessita ser reutilizado, ex: a representação de um cadastro de um cliente e todas as coisas que um cliente pode fazer.
    Os arrays quando trabalhamos com dados mais brutos que só representem valores e não funções( metodos).
*/

// 2:
// function criarRetangulo(lado1,lado2){
//     lado1 = Number(lado1) || 0;
//     lado2 = Number(lado2) || 0;

//     return {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2*(lado1+lado2),
//         area: lado1*lado2
//     }
// }

//3:
// let filme = function(nomeDoFilme, ano, diretor, ator){
//     this.nomeDoFilme = nomeDoFilme;
//     this.ano = ano;
//     this.diretor = diretor;
//     this.ator =  ator;
//     this.anuncia = function(){
//         let menssagem ="";
//         for( let i in this.ator){
//              i < Array.length-2 ? menssagem += ator[i] +", " : menssagem += ator[i] +"."
//         } 
//         console.log(`Venha assistir ao filme ${this.nomeDoFilme}, de ${this.ano}, dirigido por ${this.diretor} e estrelado por ${menssagem}`);
//         return; 
//     }
// }

// let jango = new filme("haniibal",1929,"qualquer um", ["binino,nersi,aassad,tubarão"]);

// jango.anuncia();

// 4:
// let pessoa = function(nome,idade,email,endereco){
//     this.nome = nome;
//     this.idade = idade;
//     this.email = email;
//     this.endereco = endereco;
//     this.anonimizarPessoa = function(){
//         return new pessoa("ANÔNIMO",this.idade,this.email,this.endereco);
//     }
// }

// let pedro = new pessoa("Pedro",24,"aaa@qualquercosia.com","rua das pitancas");
// console.log(pedro);
// console.log(pedro.anonimizarPessoa());


//EXERCICIOS DE FUNÇÕES DE ARRAY

// 1:
// A
//  const array = [{ nome: "Pedro", idade: 20 },{ nome: "João", idade: 10 },{ nome: "Paula", idade: 12 },{ nome: "Artur", idade: 89 }]

// function adultos(array){
//   let adultos =  array.filter((pessoa, i , a)=>{
//         return pessoa.idade >= 20;
//     })
//     return adultos;
// }

//B:
// function criancas(array){
//     let criancas =  array.filter((pessoa, i , a)=>{
//         return pessoa.idade < 20;
//     })
//         return criancas;
// }

//2:
// //A
// const array = [1, 2, 3, 4, 5, 6];
// function dobro(a){
//     a = a.map((n,i,a)=>{
//         return n*2;
//     })
//     return a;
// }
//B
// function triplo(a){
//     a = a.map((n, i, a)=>{
//         return (n*3).toString();
//     })
//     return a;
// }

// C
// function parImpar(a){
//     a = a.map((n, i, a)=>{
//        return  (n%2 === 0) ? `${n} é par` : `${n} é impar`;
//     })
//     return a;
// }

// //3:
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]
// // A
// function isElegible(a){
//     a = a.filter((p, i ,a)=>{
//         return p.idade > 14 && p.idade < 60;
//     }).filter((p, a, i)=>{
//         return p.altura >= 1.5;
//     })
//     return a;
// }

// //B
// function isNotElegible(a){
//     a = a.filter((p, i, a)=>{
//         return !isElegible(a).includes(p);
//     })
//     return a;
// }

//4

// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// function createEmail(a){
//     let masculino = a.filter((p, i, a)=>{ return p.genero === "masculino" })
//     let feminino = a.filter((p, i, a)=>{ return p.genero === "feminino" }) 
//     let email = [];
//     masculino.forEach((p, i, a) => {
//         p.cancelada ? email.push( `Olá, Sr. ${p.nome}. Infelizmente, sua consulta marcada
//         para o dia ${p.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
//         contato conosco para remarcá-la`) : email.push( `Olá, Sr. ${p.nome}. Estamos enviando esta mensagem para
//         lembrá-lo da sua consulta no dia ${p.dataDaConsulta}. Por favor, acuse
//         o recebimento deste e-mail`)
//     });  
//     feminino.forEach((p, i, a) => {
//         p.cancelada  ? email.push(`Olá, Sra. ${p.nome}. Infelizmente, sua consulta marcada
//          para o dia ${p.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
//          contato conosco para remarcá-la`) : email.push(`Olá, Sra. ${p.nome}. Estamos enviando esta mensagem para
//          lembrá-la da sua consulta no dia ${p.dataDaConsulta}. Por favor, acuse
//          o recebimento deste e-mail`)
//      });  
//      return email;
// }

// // 5
// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// function atualizaSaldo(o){
//    o.forEach((c, i, a)=>{
//          return c.compras.length > 0 ? c.saldoTotal -= c.compras.reduce((total,num)=>{ return total+num}) : false;
//     })
//     return o;
// }


// console.log(atualizaSaldo(contas));