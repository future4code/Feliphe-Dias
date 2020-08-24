// 1
// A: n = 6 erro pois n é do tipo string
var n = 'a';
// B: let MeuNumero: any. Assim podemos atribuir qualquer valor a MeuNumero
var meuNumero = 10;
// C,  D, E
var rainbow;
(function (rainbow) {
    rainbow["Red"] = "red";
    rainbow["ORANGE"] = "orange";
    rainbow["YELLOW"] = "yellow";
    rainbow["GREEN"] = "green";
    rainbow["BLUE"] = "blue";
    rainbow["INDIGO"] = "indigo";
    rainbow["VIOLET"] = "violet";
})(rainbow || (rainbow = {}));
var I = {
    name: 'Alex',
    age: 10,
    favoriteColor: rainbow.INDIGO
};
function obterEstatisticas(numeros) {
    var numerosOrdenados = numeros.sort(function (a, b) { return a - b; });
    var soma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        soma += num;
    }
    var estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
var posts = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
];
// B
function buscarPostsPorAutor(posts, autorInformado) {
    return posts.filter(function (post) {
        return post.autor === autorInformado;
    });
}
console.log(buscarPostsPorAutor(posts, 'Dobby'));
