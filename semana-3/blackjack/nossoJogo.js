/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


 let cpu = [0,0];    
 let player = [0,0];
 let play = false;
 let rodadas = false;
 let cpu_pontos = 0;
 let player_pontos = 0;

 console.log("Bem vindo ao jogo de Blackjack!");

do{
   if(!rodadas)play = confirm("Deseja jogar ?");
   
   // se deseja jogar.
   if(play){      

      //gera as cartas
      player[0] = comprarCarta();
      player[1] = comprarCarta();
      cpu[0] = comprarCarta();
      cpu[1] = comprarCarta();

      // enquanto as cartas forem iguais gere novas cartas.
      while( player[0] === cpu[0] || player[1] === cpu[1]){
         console.log("dentro do looop");
         player[0] = comprarCarta();
         player[1] = comprarCarta();
      }
      //computa os valores
      cpu_pontos = cpu[0].valor + cpu[1].valor;
      player_pontos = player[0].valor + player[1].valor;
     
      console.log(`Usuário - cartas: ${player[0].texto} ${player[1].texto} - pontuação ${player_pontos} `)
      console.log(`Computador - cartas: ${cpu[0].texto} ${cpu[1].texto}  - pontuação ${cpu_pontos}`)
      
      // verifica o vencedor:
      if(player_pontos > cpu_pontos) console.log("Vencedor!!! --- Usuário!");
      else if (player_pontos < cpu_pontos)console.log("Vencedor!!! --- Computador!");
      else console.log("Empate!\nO usuário ganhou!\nO computador ganhou!");
      rodadas = true;
      play = confirm("Outra rodada?");
   }
}while(play) 
console.log("o jogo acabou.");

