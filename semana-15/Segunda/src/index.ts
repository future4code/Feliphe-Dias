/* A: Um construtor serve para especificar como aquela classe deve ser construida ao criarmos uma nova instancia
  ex: toda instacia da classe 'C' deve ter o parametrô 'b' valendo 6 por default.
class A {
    constructor(
        b: 6,
     )
}
 */

 // B somente 1;

 class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  }

  const BrownAccount = new UserAccount('111235546','Brown', 1111);

  // C: Só conseguimos ter acesso a elas atráves de metodos da classe (setters, getters).

  // 2:
  class Transaction{
    private date: string;
    private valor: number;
    private description: string;

    public getDate() : string{
        return this.date;
    }

    public getValor() : number {
        return this.valor;
    }

    public getDescription() : string{
        return this.description
    }

    public setDate(date: string) : void{
        this.date = date;
    }

    public setValor(valor: number) : void{
         this.valor = valor ;
    }
    
    public setDescription(description: string) : void{
        this.description = description
    }

}

// 3
class JSONFileManager{
    constructor(fileName: string){

    }
};

class Bank{
    private accounts: UserAccount[];
    private fileManager: JSONFileManager;

    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
        this.accounts = accounts;
        this.fileManager = new JSONFileManager("data.json")
    }

    getAccounts() : {}
}