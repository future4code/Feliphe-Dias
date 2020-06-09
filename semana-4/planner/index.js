const tarefaTexto = document.getElementById("tarefa");
const selectDia = document.getElementsByTagName("select")[0];
const lista = document.getElementsByTagName("ul");

function adicionar(){
    if(tarefaTexto.value !== ""){
        for( let i = 0; i < 7; i++){
            if( selectDia.value === i.toString()){
                lista[i].innerHTML += `<li>${tarefaTexto.value}</li>`;
                tarefaTexto.value = "";
           
            }
        }
    }else{
        tarefaTexto.value = "";

    }
   
}
