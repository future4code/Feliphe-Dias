/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    alert(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    alert(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let cpu = [0,0];    
let player = [0,0];
let play = false;
let rodadas = false;
let maisCarta = false;
let cpu_pontos = 0;
let player_pontos = 0;

alert("Bem vindo ao jogo de Blackjack!");

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
         while( (player[0].valor === cpu[0].valor && player[0].texto === cpu[0].texto) || (player[1].valor === cpu[1].valor && player[1].texto === cpu[1].texto) ){
            alert("Erro na matrix\nRecalculando!");
            player[0] = comprarCarta();
            player[1] = comprarCarta();
         }
      
      // se forem ases gera outro baralho
      while(player[0].valor == 11 && cpu[0].valor == 11){
         alert(`Usuário - cartas: ${player[0].texto} ${player[1].texto}`)
         alert(`Computador - cartas: ${cpu[0].texto} ${cpu[1].texto}`)
         alert("As duas primeiras cartas são Ases(A)\nSorteando cartas novamente");
         player[0] = comprarCarta();
         player[1] = comprarCarta();
         cpu[0] = comprarCarta();
         cpu[1] = comprarCarta();
      }

      let cartasUsuario = " " + player[0].texto+ " "+ player[1].texto;  
      let cartasCpu = " " + cpu[0].texto;
   
    
      // revala carta do usuario  
      if(player_pontos !== 21 && cpu_pontos !== 21)
      maisCarta = confirm(`Suas cartas são ${cartasUsuario}.\nA carta revelada do computador é ${cartasCpu}\nDeseja comprar mais uma carta?`);
      
      // computa os pontos
      player_pontos = player[0].valor + player[1].valor;
      cpu_pontos = cpu[0].valor + cpu[1].valor;
      
      // compra mais cartas
      while(maisCarta && player_pontos < 21){
        if(player_pontos <21) {
            player.push(comprarCarta());
            player_pontos += player[player.length-1].valor;
            cartasUsuario += " "+player[player.length-1].texto;
            maisCarta = confirm(`Suas cartas são ${cartasUsuario}.\nA carta revelada do computador é ${cartasCpu}\nDeseja comprar mais uma carta?`);;
        }
          
      }
      //rodada da cpu
      cartasCpu += " " + cpu[1].texto;
      while(cpu_pontos < player_pontos){
         cpu.push(comprarCarta());
         cartasCpu += " "+ cpu[cpu.length-1].texto;
         cpu_pontos += cpu[cpu.length-1].valor;
      }
   
      
      // verifica o vencedor:
      alert("Suas cartas " + cartasUsuario +" Sua pontuação é " + player_pontos+"\n"+
            "As cartas do computador são" + cartasCpu + " A pontuação do computador é "+cpu_pontos);
      if(player_pontos > 21) alert("O Computador ganhou");
      else if (player_pontos <= 21 && cpu_pontos > 21) alert("\nO Usuário ganhou");
      else if ( player_pontos == cpu_pontos)alert("Empate!\nO usuário ganhou!\nO computador ganhou!");
      rodadas = true;
      play = confirm("Outra rodada?");
   }
}while(play) 
alert("o jogo acabou.");

