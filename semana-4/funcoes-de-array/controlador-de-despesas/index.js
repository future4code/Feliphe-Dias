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
            
        }
    }else alert("Preenca todos os campos");
    console.log(listaDespesas);
}

function consulta(){
    let resultadoConsulta = [];
    if(listaDespesas[0] !== null){
        resultadoConsulta = listaDespesas.filter((despesa, i, a)=>{
            return despesa.tipo === consultaTipo.value && despesa.valor >= Number(minValor.value) && despesa.valor <= Number(maxValor.value)
        
        })

    }
    console.log(resultadoConsulta);
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
            break;
    }
}


console.log()