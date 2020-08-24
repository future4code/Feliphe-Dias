// 1
// A: n = 6 erro pois n é do tipo string
let n: string = 'a';

// B: let MeuNumero: any. Assim podemos atribuir qualquer valor a MeuNumero
let meuNumero: number = 10;

// C,  D, E
enum rainbow {
    Red = 'red',
    ORANGE = 'orange', 
    YELLOW = 'yellow', 
    GREEN = 'green', 
    BLUE = 'blue', 
    INDIGO = 'indigo',
    VIOLET = 'violet',
}

type person = {
    name: string,
    age: number,
    favoriteColor: rainbow,
}

const I: person = {
    name: 'Alex',
    age: 10,
    favoriteColor: rainbow.INDIGO,
}

// 2

type dataSample = {
    data: number[],
    obterEstatisticas: (array : Array<number>) => object,
}

function obterEstatisticas( numeros: Array<number>) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    type statisticsType = {
        maior: number,
        menor: number,
        media: number,
    }

    const estatisticas: statisticsType = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// 3
// A
type postsType = { autor: string, texto: string}[];


const posts: postsType = [
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
  ]

// B
function buscarPostsPorAutor(
    posts:{ autor: string}[], 
    autorInformado : string
    ) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

// 4 
// A: Usaria o comando tsc nome-do-arquivo.ts
// B: Caso estivesse dentro da pasta src teria que indicar o caminho. EX : tsc ./src/nome-do-arquivo.ts
// C: Sim, o comando tsc sequido do nome dos arquivos. ex: tsc arquivo1.ts arquivo2.ts arquivo3.ts.
// D: A versão do ecmaScript é a 5.