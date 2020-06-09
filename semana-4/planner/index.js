const tarefaTexto = document.getElementById("tarefa");
const selectDia = document.getElementsByTagName("select")[0];
const lista = document.getElementsByTagName("ul");
const listItem = document.getElementsByClassName("li")
const horas = document.getElementById("horas");

let itemNumber = 0;

function adicionar(){
    if(tarefaTexto.value !== ""){
        for( let i = 0; i < 7; i++){
            if( selectDia.value === i.toString()){
                lista[i].innerHTML += `<li onClick="itemClick(this)">${tarefaTexto.value} ${horas.value} H</li>`;
                tarefaTexto.value = "";
           
            }
        }
    }else{
        alert("Por favor preencha a tarefa e as horas")
        tarefaTexto.value = "";

    }
}

function itemClick(elmnt){
   if( elmnt.style.textDecoration == "line-through") elmnt.style.textDecoration = "none"
   else  elmnt.style.textDecoration = "line-through";
}

function limpar(){
    for ( let i = 0; i < 7; i++){
        lista[i].innerHTML = "";
    }
}