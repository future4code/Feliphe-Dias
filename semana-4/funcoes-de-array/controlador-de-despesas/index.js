let cadastroSection = document.getElementById("cadastroSection");
let consultaSection = document.getElementById("consultaSection");
let extratoSection = document.getElementById("extratoSection");
let despesaValor = document.getElementById("valor");
let despesaTipo = document.getElementById("cadastrarSelect");
let despesaDescriocao = document.getElementById("descricao");
let consultaTipo= document.getElementById("consultaTipo");
let minValor = document.getElementById("minValor");
let maxValor = document.getElementById("maxValor");

let Despesa = function (valor, tipo, descricao){
    this.valor = valor;
    this.tipo = tipo;
    this.descricao = descricao;
}
let listaDespesas = [];

let isEmpty =  (a,b,c) => {
    if (a !== "" && b !== "" && c !== "" ) return true;
    else return false;
}

function criarDespesa(){
    if(isEmpty(despesaValor.value,despesaTipo.value,despesaDescriocao.value)){
        let valor = Number(despesaValor.value);
        let tipo = despesaTipo.value;
        let desc = despesaDescriocao.value;
        if(!Number.isNaN(valor)){
            listaDespesas.push(new Despesa(valor,tipo,desc));
            limpar([despesaValor,despesaDescriocao]);
        }
    }else alert("Preenca todos os campos");
   
}

function consulta(){
    let resultadoConsulta = [];
    if(listaDespesas[0] !== null && isEmpty(minValor.value,maxValor.value,"a")){
        resultadoConsulta = listaDespesas.filter((despesa, i, a)=>{
            return despesa.tipo === consultaTipo.value && despesa.valor >= Number(minValor.value) && despesa.valor <= Number(maxValor.value)
        
        })
    } else return alert("Por favor Preencha todos os campos");
    resultadoConsulta.forEach((despesa, i ,e)=>{
        document.getElementsByTagName("ul")[0].innerHTML += `<li><h3>Despesa:${i}<h3></li>`;
        document.getElementsByTagName("ul")[0].innerHTML += `<li>Tipo:${despesa.tipo}</li>`;
        document.getElementsByTagName("ul")[0].innerHTML += `<li>Valor:${despesa.valor}</li>`;
        document.getElementsByTagName("ul")[0].innerHTML += `<li>Descrição:${despesa.descricao}</li>`;
    })
} 

function limparFiltros(){
    document.getElementsByTagName("ul")[0].innerHTML = "";   
}

function hideSections(){
    cadastroSection.style.display = "none";
    consultaSection.style.display = "none";
    extratoSection.style.display = "none";
}

function showSection(sectionId){
    hideSections();
    switch (sectionId){
        case "cadastroSection":
            cadastroSection.style.display = "flex";
            break;
        case "consultaSection":
            consultaSection.style.display = "flex";
            break;
        case "extratoSection":
            extratoSection.style.display = "flex";
            gerarExtrato();
            break;
    }
}


function gerarExtrato(){
    let valoresTotais = [0,0,0,0,0];
    let p = document.getElementsByTagName("p"); 

    listaDespesas.forEach((despesa, i ,a)=> {
        switch (despesa.tipo){
            case "casa":
                valoresTotais[0] += despesa.valor;
                break;
            case "viagem":
                valoresTotais[1] += despesa.valor;
                break;
            case "pessoais":
                valoresTotais[2] += despesa.valor;
                break;
            case "outros":
                valoresTotais[3] += despesa.valor;
                break;            
        }
    });
    
    valoresTotais[4] += valoresTotais[0] + valoresTotais[1] + valoresTotais[2] + valoresTotais[3];
    for(let i = 0; i < p.length; i++){
        switch (i){
            case 0:
                p[i].innerHTML = `Casa: ${valoresTotais[i]}`;
                break;
            case 1:
                p[i].innerHTML =`Viagem: ${valoresTotais[i]}`;
                break;
            case 2:
                p[i].innerHTML =`Outros: ${valoresTotais[i]}`;
                break;
            case 3:
                p[i].innerHTML = `Outros: ${valoresTotais[i]}`;
                break;
            case 4:
                p[i].innerHTML = `Valor Total: ${valoresTotais[i]}`;
                break;            
        }
        
    }  
  
}

function limpar(elmnArray){
    elmnArray.forEach((e, i, a)=>{
        e.value = "";
    })
}