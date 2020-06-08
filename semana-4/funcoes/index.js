/* 
EXERCICIO 1:

A. array == []
B . array == [0,1,0,1,2,3]
c.  array == [0,1,0,1,2,3,0,1,2,3,4,5]

EXERCICIO 2:

A. Darvas, João, undefined
B . sim, pois o codigo pede dois parametros um deles uma lista de elementos x e um elemento qualquer y
    depois verifica se y esta contido em x e retorna o elemento identico a y dentro de x. caso y não esteja contido
    em x retorna undefined.

EXERCICIO 3:
    A funcão recebe como parametro um array x e intera todos os elemetos dele
    a cada interação soma o elemento do aray a ele mesmo(x2) e o eleva ao quadrado, guardando
    cada valor em sua respectivas variaveis.
    adiciona o resultado de cada operação em um novo array e retorna esse array.
    eu dividiria essa função em duas, dobro_do_array() e array_ao_quadrado().
*/

//EXERCICIOS 4:

// A

function humanLifeTimeToDogLifeTime( humanLifeTime){
        return humanLifeTime*7;
}

// B

function studentStatus(name, age, address, isStudent){
    if(isStudent) return `Eu sou ${name}, tenho ${age} anos, moro em ${address} e sou estudante.`
    else return `Eu sou ${name}, tenho ${age} anos, moro em ${address} e não sou estudante.`
}

//EXERCICIO 5: 

 
let anoToSeculo = (ano) => {
    let seculosLista = ["I","II","III","IV","V","VI","VII","VIII",'IX',"X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"];
    let arrayAno =  []
    for(let geraAno = 1; geraAno < 2002; geraAno += 100){
        arrayAno.push(geraAno) 
    }
    for( let i = 0; i < 22; i +=1){
        if( ano >= arrayAno[i] && ano < arrayAno[i+1]) return  `O ano ${ano} pertence ao século ${seculosLista[i]}`;
    
    }
}

// EXERCICIO 6:

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

//A
function arrayLenght(array){
    return array.length;
}

//B
function isEven(number){
    if(number % 2 == 0) return true;
    else return false;
}

//C
function getEvenArray(array){
    let newArray = [];

    for (let i of array){
        if( i % 2 == 0) newArray.push(i)
    }
    return newArray;
}


//D
function getEvenArray2(array){
    let newArray = [];

    for (let i of array){
        if( isEven(i)) newArray.push(i)
    }
    return newArray;
}

