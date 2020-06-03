/*
    EXERCICIO 1:
        A - realizau um teste condicional if(se).
        B - somente para numeros pares.
        C - para valores não numericos ou numeros impares
    
    EXERCICIO 2:
        1 - O codigo serve para o usuario fazer uma consulta do preço de um produto.
        2 - a menssagem sera ("o preço da frua maça é R$ 2.25").
        3 - 24,55
        4 - a menssagem impresa seria (" o preço da fruta pêra é R$ 5 ")

    EXERCICIO 3:
        1 - a menssagem sera ("Número 1 é menor ou igual a 2")
        2 - havera erro pois a variável menssagem está contida no bloco if só podendo ser acessada dentro do próprio
            escobo ou por blocos filhos a ele. Qualquer tentativa de acessar a variável fora de um desses dois casos
            iria resultar em um erro.

        */


//EXERCICIO 4: 
let number1 = Number(prompt("Digite o primeiro número"));
let number2 = Number(prompt("Digite o segundo número"));
let number3 = Number(prompt("Digite o terceiro número"));
let menssagem = "";

// A
console.log("\nA:\n")
if(number1 > number2){
    console.log( number1+" "+number2);
}
else{
    console.log( number2+" "+number1);
}

// O programa excuta o bloco else caso os 2 numeros  sejam iguais.

//B
console.log("\nB:\n")
if( (number1 < number2) && (number1 < number3)){
        menssagem += number1 + " ";
        
        if(number2 < number3){
            menssagem += number2 + " ";
            menssagem += number3;
        }
        else{
            menssagem += number3 + " ";
            menssagem += number2;
        }
        
}
else if ( (number2 < number1) && (number2 < number3)) {
        menssagem += number2 + " ";
        
        if(number1 < number3){
            menssagem += number1 + " ";
            menssagem += number3;
        }
        else{
            menssagem += number3 + " ";
            menssagem += number1;
        }
}
else if ( (number3 < number1) && (number3 < number2)) {
        menssagem += number3 + " ";
        if(number2 < number1){
            menssagem += number2 + " ";
            menssagem += number1;
        }
        else{
            menssagem += number1 + " ";
            menssagem += number2;
        }
   
}

console.log(menssagem);
// se todos os numeros forem iguais aparece nada.


//C
menssagem = "";
console.log("\nC:\n")
if( (number1 < number2) && (number1 < number3)){
    menssagem += number1 + " ";
    
    if(number2 < number3){
        menssagem += number2 + " ";
        menssagem += number3;
    }
    else{
        menssagem += number3 + " ";
        menssagem += number2;
    }
    
}
else if ( (number2 < number1) && (number2 < number3)) {
    menssagem += number2 + " ";
    
    if(number1 < number3){
        menssagem += number1 + " ";
        menssagem += number3;
    }
    else{
        menssagem += number3 + " ";
        menssagem += number1;
    }
}
else if ( (number3 < number1) && (number3 < number2)) {
    menssagem += number3 + " ";
    if(number2 < number1){
        menssagem += number2 + " ";
        menssagem += number1;
    }
    else{
        menssagem += number1 + " ";
        menssagem += number2;
    }

}
else{
    console.log("Por favor somente numeros não iguais.")
}
console.log(menssagem+"\n");


/* 
  EXERCÍCO 5
  A : 
  link:  https://drive.google.com/file/d/1H8GtxcnTV9YkVFMTLvoxmq9b_zlaI5uy/view?usp=sharing  
*/

//B

console.log("\nEXERCÍCIO 5");
let opcao = prompt("Vertebrado?\nS\nN");

switch (opcao.toLowerCase()){
    case "s":
        opcao = prompt("Tem pelos?\nS\nN");
        switch (opcao.toLowerCase()){
            case "s":
                opcao = prompt("É racional?\nS\nN")
                switch(opcao.toLowerCase()){
                    case "s":
                        console.log("É humano");
                        break;
                    case "n":
                        console.log("É um mamifero não humano");
                        break;
                }
                break;
            
            case "n":
                opcao = prompt("Tem penas?\nS\nN");
                switch(opcao.toLowerCase()){
                    case "s":
                        console.log("É um passaro.");
                        break;
                    case "n":
                        opcao = prompt("Terrestre?\nS\nN");
                        switch(opcao.toLowerCase()){
                            case "s":
                                opcao = prompt("Viveu na agua ?")
                                switch(opcao.toLowerCase()){
                                    case "s":
                                        console.log("Anfíbio");
                                        break;
                                    case "n":
                                        console.log("Réptil");
                                        break;
                                }
                                break;
                            case "n":
                                console.log("Peixe");
                                break;
                        }
                        break;
                        
                }  
                break;

            default:
                break;
        }
        break;

    case "n":
        console.log("É um invertebrado");
        break;
    default:
        console.log("opção invalida");
}

// desafio
console.log("\nDESAFIO:\n");

let nome = prompt("Por favor informe seu nome:");
let jogoTipo = "";
let jogoEtapa = "";
let categoria = "";
let ingressos = "";
let ingressosQuantidade = 0;
let ingressoTotal = 0;

let ingressosCategoriaValor = [0,1320,660,1980,880,440,1320,550,330,880,220,170,330];
let menssagemJogo = "";

if(nome !== ""){
    jogoTipo = prompt("Tipo de jogo:\nIN para Internacional\nDO - para nacional");
    switch (jogoTipo.toLowerCase()){
        case "do":
            jogoEtapa = prompt("Etapa do jogo:\nSF - para Semi-final\nFI - para final\nDT - para decisão do terceiro lugar");
            menssagemJogo +="---Dados da compra--- Nome do cliente: "+nome+"\nTipo do jogo:  Nacional\n"        
            break;
        case "in":
            jogoEtapa = prompt("Etapa do jogo:\nSF - para Semi-final\nFI - para final\nDT - para decisão do terceiro lugar");
            menssagemJogo +="---Dados da compra--- Nome do cliente: "+nome+"\nTipo do jogo:  Internacional\n"        
            break;
        default:
            console.log("valor invalido");
    }
    switch (jogoEtapa.toLowerCase()){
        case "sf":
            menssagemJogo += "Etapa do jogo:  Semi-final";
            categoria = prompt("\nCategoria:\n1\n2\n3\n4"); 
            break;
        case "fi":
            menssagemJogo += "Etapa do jogo:  Final" ;
            categoria = prompt("\nCategoria:\n1\n2\n3\n4");
            break;
        case "dt":
            menssagemJogo += "Etapa do jogo:  Decisão do terceiro lugar" ;
            categoria = prompt("\nCategoria:\n1\n2\n3\n4");
            break;
        default:
            console.log("valor invalido");
    }

    ingressos = prompt("\nQuantidade de ingressos:");
    ingressosQuantidade = Number(ingressos);

if( ( typeof ingressosQuantidade === "number" ) && (ingressosQuantidade > 0) ){
        
        switch (categoria.toLowerCase()){
            case "1":
                menssagemJogo += "\nCategoria:  1"
                break;
            case "2":
                menssagemJogo += "\nCategoria:  2"
                break;
            case "3":
                menssagemJogo += "\nCategoria:  3"
                break;
            case "4":
                menssagemJogo += "\nCategoria:  4"
                break;
            default:
                console.log("valor invalido");
        }
        menssagemJogo += "\nQuantidade de Ingressos: "+ingressosQuantidade+" ingressos\n---Valores--- \n";
    
    }
    else console.log("valor invalido");
}

else {
    console.log("Nome invalido.")
}

switch(jogoTipo.toLowerCase()){
    
    case "do":
    switch (categoria.toLowerCase()){
        case "1":
            switch(jogoEtapa.toLowerCase()){
                case "sf":
                    menssagemJogo += "R$ " + ingressosCategoriaValor[1];
                    ingressoTotal = ingressosCategoriaValor[1] * ingressosQuantidade;
                    menssagemJogo += "\nValor total:  R$ " + ingressoTotal;
                    break;
                case "dt":
                    menssagemJogo += "R$ " + ingressosCategoriaValor[2];
                    ingressoTotal = ingressosCategoriaValor[2] * ingressosQuantidade;
                    menssagemJogo += "\nValor total:  R$ " + ingressoTotal;
                    break;
                case "fi":
                    menssagemJogo += "R$ " + ingressosCategoriaValor[3];
                    ingressoTotal = ingressosCategoriaValor[3] * ingressosQuantidade;
                    menssagemJogo += "\nValor total:  R$ " + ingressoTotal;
                    break;
            }
            break;
        case "2":
            switch(jogoEtapa.toLowerCase()){
                case "sf":
                    menssagemJogo += "R$ " + ingressosCategoriaValor[4];
                    ingressoTotal = ingressosCategoriaValor[4] * ingressosQuantidade;
                    menssagemJogo += "\nValor total:  R$ " + ingressoTotal;
                    break;
                case "dt":
                    menssagemJogo += "R$ " + ingressosCategoriaValor[5];
                    ingressoTotal = ingressosCategoriaValor[5] * ingressosQuantidade;
                    menssagemJogo += "\nValor total:  R$ " + ingressoTotal;
                    break;
                case "fi":
                    menssagemJogo += "R$ " + ingressosCategoriaValor[6];
                    ingressoTotal = ingressosCategoriaValor[6] * ingressosQuantidade;
                    menssagemJogo += "\nValor total:  R$ " + ingressoTotal;
                    break;
            }
            break;
        case "3":
            switch(jogoEtapa.toLowerCase()){
                case "sf":
                    menssagemJogo += "R$ " + ingressosCategoriaValor[7];
                    ingressoTotal = ingressosCategoriaValor[7] * ingressosQuantidade;
                    menssagemJogo += "\nValor total:  R$ " + ingressoTotal;
                    break;
                case "dt":
                    menssagemJogo += "R$ " + ingressosCategoriaValor[8];
                    ingressoTotal = ingressosCategoriaValor[8] * ingressosQuantidade;
                    menssagemJogo += "\nValor total:  R$ " + ingressoTotal;
                    break;
                case "fi":
                    menssagemJogo += "R$ " + ingressosCategoriaValor[9];
                    ingressoTotal = ingressosCategoriaValor[9] * ingressosQuantidade;
                    menssagemJogo += "\nValor total:  R$ " + ingressoTotal;
                    break;
            }
         
            break;
        case "4":
            switch(jogoEtapa.toLowerCase()){
                case "sf":
                    menssagemJogo += "R$ " + ingressosCategoriaValor[10];
                    ingressoTotal = ingressosCategoriaValor[10] * ingressosQuantidade;
                    menssagemJogo += "\nValor total:  R$ " + ingressoTotal;
                    break;
                case "dt":
                    menssagemJogo += "R$ " + ingressosCategoriaValor[11];
                    ingressoTotal = ingressosCategoriaValor[11] * ingressosQuantidade;
                    menssagemJogo += "\nValor total:  R$ " + ingressoTotal;
                    break;
                case "fi":
                    menssagemJogo += "R$ " + ingressosCategoriaValor[12];
                    ingressoTotal = ingressosCategoriaValor[12] * ingressosQuantidade;
                    menssagemJogo += "\nValor total:  R$ " + ingressoTotal;
                    break;
            }
            break;
    }
    break;

    case "in":
        switch (categoria.toLowerCase()){
            case "1":
                switch(jogoEtapa.toLowerCase()){
                    case "sf":
                        menssagemJogo += "$ " + ingressosCategoriaValor[1]/4.10;
                        ingressoTotal = (ingressosCategoriaValor[1]* ingressosQuantidade)/4.10;
                        menssagemJogo += "\nValor total:  $ " + ingressoTotal;
                        break;
                    case "dt":
                        menssagemJogo += "$ " + ingressosCategoriaValor[2]/4.10;
                        ingressoTotal = (ingressosCategoriaValor[2] * ingressosQuantidade)/4.10;
                        menssagemJogo += "\nValor total:  $ " + ingressoTotal;
                        break;
                    case "fi":
                        menssagemJogo += "$ " + ingressosCategoriaValor[3]/4.10;
                        ingressoTotal = (ingressosCategoriaValor[3] * ingressosQuantidade)/4.10;
                        menssagemJogo += "\nValor total:  $ " + ingressoTotal;
                        break;
                }
                break;
            case "2":
                switch(jogoEtapa.toLowerCase()){
                    case "sf":
                        menssagemJogo += "$ " + ingressosCategoriaValor[4]/4.10;
                        ingressoTotal = (ingressosCategoriaValor[4]* ingressosQuantidade)/4.10;
                        menssagemJogo += "\nValor total:  $ " + ingressoTotal;
                        break;
                    case "dt":
                        menssagemJogo += "$ " + ingressosCategoriaValor[5]/4.10;
                        ingressoTotal = (ingressosCategoriaValor[5] * ingressosQuantidade)/4.10;
                        menssagemJogo += "\nValor total:  $ " + ingressoTotal;
                        break;
                    case "fi":
                        menssagemJogo += "$ " + ingressosCategoriaValor[6]/4.10;
                        ingressoTotal = (ingressosCategoriaValor[6] * ingressosQuantidade)/4.10;
                        menssagemJogo += "\nValor total:  $ " + ingressoTotal;
                        break;
                }
                break;
            case "3":
                switch(jogoEtapa.toLowerCase()){
                    case "sf":
                        menssagemJogo += "$ " + ingressosCategoriaValor[7]/4.10;
                        ingressoTotal = (ingressosCategoriaValor[7]* ingressosQuantidade)/4.10;
                        menssagemJogo += "\nValor total:  $ " + ingressoTotal;
                        break;
                    case "dt":
                        menssagemJogo += "$ " + ingressosCategoriaValor[8]/4.10;
                        ingressoTotal = (ingressosCategoriaValor[8] * ingressosQuantidade)/4.10;
                        menssagemJogo += "\nValor total:  $ " + ingressoTotal;
                        break;
                    case "fi":
                        menssagemJogo += "$ " + ingressosCategoriaValor[9]/4.10;
                        ingressoTotal = ingressosCategoriaValor[9] * ingressosQuantidade/4.10;
                        menssagemJogo += "\nValor total:  $ " + ingressoTotal;
                        break;
                }
                break;
            case "4":
                switch(jogoEtapa.toLowerCase()){
                    case "sf":
                        menssagemJogo += "$ " + ingressosCategoriaValor[10]/4.10;
                        ingressoTotal = (ingressosCategoriaValor[10]* ingressosQuantidade)/4.10;
                        menssagemJogo += "\nValor total:  $ " + ingressoTotal;
                        break;
                    case "dt":
                        menssagemJogo += "$ " + ingressosCategoriaValor[11]/4.10;
                        ingressoTotal = (ingressosCategoriaValor[11] * ingressosQuantidade)/4.10;
                        menssagemJogo += "\nValor total:  $ " + ingressoTotal;
                        break;
                    case "fi":
                        menssagemJogo += "$ " + ingressosCategoriaValor[12]/4.10;
                        ingressoTotal = (ingressosCategoriaValor[12] * ingressosQuantidade)/4.10;
                        menssagemJogo += "\nValor total:  $ " + ingressoTotal;
                        break;
                }
                break;
        }            
        break;

}
console.log(menssagemJogo);
