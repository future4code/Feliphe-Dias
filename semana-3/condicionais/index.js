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
        2 - havera erro pois a variável mensagem está contida no bloco if só podendo ser acessada dentro do próprio
            escobo ou por blocos filhos a ele. Qualquer tentativa de acessar a variável fora de um desses dois casos
            iria resultar em um erro.

        */


//EXERCICIO 4: 
let number1 = Number(prompt("Digite o primeiro número"));
let number2 = Number(prompt("Digite o segundo número"));
let number3 = Number(prompt("Digite o terceiro número"));
let mensagem = "";

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
        mensagem += number1 + " ";
        
        if(number2 < number3){
            mensagem += number2 + " ";
            mensagem += number3;
        }
        else{
            mensagem += number3 + " ";
            mensagem += number2;
        }
        
}
else if ( (number2 < number1) && (number2 < number3)) {
        mensagem += number2 + " ";
        
        if(number1 < number3){
            mensagem += number1 + " ";
            mensagem += number3;
        }
        else{
            mensagem += number3 + " ";
            mensagem += number1;
        }
}
else if ( (number3 < number1) && (number3 < number2)) {
        mensagem += number3 + " ";
        if(number2 < number1){
            mensagem += number2 + " ";
            mensagem += number1;
        }
        else{
            mensagem += number1 + " ";
            mensagem += number2;
        }
   
}

console.log(mensagem);
// se todos os numeros forem iguais aparece nada.


//C
mensagem = "";
console.log("\nC:\n")
if( (number1 < number2) && (number1 < number3)){
    mensagem += number1 + " ";
    
    if(number2 < number3){
        mensagem += number2 + " ";
        mensagem += number3;
    }
    else{
        mensagem += number3 + " ";
        mensagem += number2;
    }
    
}
else if ( (number2 < number1) && (number2 < number3)) {
    mensagem += number2 + " ";
    
    if(number1 < number3){
        mensagem += number1 + " ";
        mensagem += number3;
    }
    else{
        mensagem += number3 + " ";
        mensagem += number1;
    }
}
else if ( (number3 < number1) && (number3 < number2)) {
    mensagem += number3 + " ";
    if(number2 < number1){
        mensagem += number2 + " ";
        mensagem += number1;
    }
    else{
        mensagem += number1 + " ";
        mensagem += number2;
    }

}
else{
    console.log("Por favor somente numeros não iguais.")
}
console.log(mensagem+"\n");


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
let ingressoValor = 0;
let ingressosCategoria = [1320,880,550];
let menssagemJogo = "";
if(nomae !== ""){
    jogoTipo = prompt("Tipo de jogo:\nIN para Internacional\nDO - para nacional");
    switch (jogoTipo.toLowerCase()){
        case "do":
            jogoEtapa = prompt("Etapa do jogo:\nSF - para Semi-final\nFI - para final");
            menssagemJogo +="---Dados da compra--- Nome do cliente: "+nome+"\nTipo do jogo:  Nacional\n"        
            break;
        case "in":
            jogoEtapa = prompt("Etapa do jogo:\nSF - para Semi-final\nFI - para final");
            menssagemJogo +="---Dados da compra--- Nome do cliente: "+nome+"\nTipo do jogo:  Internacional\n"        
            break;
        default:
            console.log("valor invalido");
    }
    switch (jogoe.toLowerCase()){
        case "sf":
            menssagemJogo += "Etapa do jogo:  Semi-final";
            categoria = prompt("Categoria:\n1\n2\n3\n4"); 
            break;
        case "fi":
            menssagemJogo += "Etapa do jogo:  Final" ;
            categoria = prompt("Categoria:\n1\n2\n3\n4");
            break;
        default:
            console.log("valor invalido");
    }

    ingressos = prompt("Quantidade de ingressos:");
    ingressosQuantidade = Number(ingressos);
    if( (ingressosQuantidade === typeof number ) && (ingressosQuantidade > 0) ){
        
        switch (categoria.toLowerCase()){
            case "1":
                menssagemJogo += "Categoria:  1"
                break;
            case "2":
                menssagemJogo += "Categoria:  2"
                break;
            case "3":
                menssagemJogo += "Categoria:  3"
                break;
            case "4":
                menssagemJogo += "Categoria:  4"
                break;
            default:
                console.log("valor invalido");
        }
        menssagemJogo += "Quantidade de Ingressos: "+ingressosQuantidade+" ingressos\n---Valores--- \n";
    
    }
    else console.log("valor invalido");
}

else {
    console.log("Nome invalido.")
}


