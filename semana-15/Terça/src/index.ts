// 1

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
    }

    //4
    // public introduceYourself(): void{
    //     console.log("Olá, bom dia!");
    // }
    
    // 5
    public introduceYourself(): void{
        console.log(`Olá, sou ${this.name}. Bom dia! `);
    }
}

// const ski = new User((Date.now()*Math.random()).toString(), "alex@gmail.com", "Alex", "123456" );

// A. sim através dos metodos get.
// B. foi chamado somente uma vez.

// 2 

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }

  }

//   const pedrinho = new Customer((Math.round(Date.now()*Math.random())).toString(), "alex@gmail.com", "Alex", "123456", "558754456" );
  
  //A. foi empreso somente uma vez.
  // B. foi empreso somente uma vez.

  // 3 
  // A. não pois o metodo getPassworld não existe e a propriedade passworld é privada.  
  
//   console.log(
//     pedrinho.getCreditCard(),
//     pedrinho.getEmail(),
//     pedrinho.getId(),
//     pedrinho.getName(),
//   )

  // 4.
//   pedrinho.introduceYourself();

// 5 
// pedrinho.introduceYourself();

// 6 

class Employee extends User{
    //11
    public static BENEFITS_VALUE: number = 400;

    protected admissionDate: string;
    protected baseSalary: number;

    constructor(
        admissionDate: string, 
        baseSalary: number, 
        id: string,
		email: string,
		name: string,
		password: string
        ){
       super(id, email, name, password);
       this.admissionDate = admissionDate;
       this.baseSalary = baseSalary;
    }

    getadmissionDate (): string{
        return this.admissionDate;
    }

    getbaseSalary(): number {
        return this.baseSalary;
    }
    // 7
    calculateTotalSalary() : number{
        return this.baseSalary + Employee.BENEFITS_VALUE;
    }
}

// const pedrinho = new Employee(
//     "27/04/2005",
//     2500,
//     (Math.round(Date.now()*Math.random())).toString(),
//      "alex@gmail.com", 
//      "Alex", 
//      "123456",);

// A. somente 1 vez;
// B. Todos os dados da classe User e Employee podem ser impressos.

// 7 
// console.log(pedrinho.calculateTotalSalary());

// 8

class Seller extends Employee{
    //11
    public static SELLING_COMMISSION: number = 5;
    // 9
    private salesQuantity: number = 0;

    setSalesQuantity(number: number){
        this.salesQuantity = number;
    }

    // 10
    // @override
    calculateTotalSalary(): number{
        return  Seller.SELLING_COMMISSION*this.salesQuantity + this.baseSalary + Employee.BENEFITS_VALUE;
    }
};

const pedrinhoSeller = new Seller(
    '25/01/1444',
    1000,
    '456874',
    'pedrinhoSeller@email.com',
    'Pedrinho',
    '12355',
    )

// A.  Os mesmos parametrôs usados na classe Employee.
console.log(pedrinhoSeller.calculateTotalSalary());
console.log(pedrinhoSeller.getEmail());
console.log(pedrinhoSeller.getId());
console.log(pedrinhoSeller.getName());
console.log(pedrinhoSeller.getadmissionDate());
console.log(pedrinhoSeller.getbaseSalary());
// B. todas as informações que possuem um metodo get podem ser empressas.

// 9
// A. não pois ele é privado e não possui nenhum metodo que permite acessalo.

// 10 

// A. foi empresso um salrio total diferente do anterior pois o metodo foi da classe pai foi sobrescrido
pedrinhoSeller.setSalesQuantity(10);
console.log(pedrinhoSeller.calculateTotalSalary());

// 11