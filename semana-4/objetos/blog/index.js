let artigo = {
    autor:"",
    titulo:"",
    conteudo:""
}

const artigoArea = document.getElementsByTagName("section")[0];
const inputAutor = document.getElementById("autor");
const inputTitulo = document.getElementById("titulo");
const inputArtigo = document.getElementById("artigo")
const buttonEditCriar = document.getElementById("createArticle");
const previewParagrafo = document.getElementById("paragrafoPreview");
const mostrarArtigos = document.getElementById("mostrarTodos");
let artigos =[artigo];



let autor = ""

function showPreview(){
    if(artigos[artigos.length-1].autor !== "") autor = "Autor:";
    hide();
    previewParagrafo.style.display = "block";
    previewParagrafo.innerHTML = `<h2>${artigos[artigos.length-1].titulo}</h2><br>
    ${artigos[artigos.length-1].conteudo}<br><br><i>${autor} ${artigos[artigos.length-1].autor}</i>`

}

function editArtigo(){
    autor = "";
    show();
    previewParagrafo.style.display = "none";
    inputAutor.value  = artigos[artigos.length-1].autor;
    inputTitulo.value  = artigos[artigos.length-1].titulo;
    inputArtigo.value  = artigos[artigos.length-1].conteudo;
}

function salvarArtigo(){
    if(inputAutor.value !== "" || inputTitulo.value !== "" || inputArtigo.value !== ""){
        artigos.push( Object.create(artigo));
        artigos[artigos.length-1].autor ="";
        artigos[artigos.length-1].titulo = "";
        artigos[artigos.length-1].conteudo = "";
        inputAutor.value = "";
        inputTitulo.value = "";
        inputArtigo.value = "";
        editArtigo();
        console.log(artigos)
    }
}

function cacheInput(inputId){
    switch (inputId){
        case "autor": 
            artigos[artigos.length-1].autor = inputAutor.value
            break;
        case "titulo": 
            artigos[artigos.length-1].titulo = inputTitulo.value
            break;
        case "artigo":
            artigos[artigos.length-1].conteudo = inputArtigo.value
            break;
    }
}


function mostrarTodosOsArtigos(){
    hide();
    previewParagrafo.style.display = "block";
    if( mostrarArtigos.innerHTML == "VER ARTIGOS"){
        for( let i in artigos){
            if(artigos[i].autor !== "") autor = "Autor:";
            else autor = "";
           previewParagrafo.innerHTML += `<div class="artigosVisivel"><br><h2>${artigos[i].titulo}</h2><br><br>
            ${artigos[i].conteudo}<i><br><br>${autor} ${artigos[i].autor}</i></div>`

        }
    }
}

function hide(){
    inputArtigo.style.display = "none";
    inputAutor.style.display = "none";
    inputTitulo.style.display = "none";
    document.getElementsByTagName("label")[0].style.display = "none";
    document.getElementsByTagName("label")[1].style.display = "none";
    previewParagrafo.style.display = "none";
}

function show(){
    inputArtigo.style.display = "block";
    inputAutor.style.display = "inline";
    inputTitulo.style.display = "inline";
    document.getElementsByTagName("label")[0].style.display = "inline";
    document.getElementsByTagName("label")[1].style.display = "inline";
}

function showAll(){
    let a = document.getElementsByClassName("artigosVisivel");
    for ( let i in a){
        a[i].innerHTML="";
    }

}