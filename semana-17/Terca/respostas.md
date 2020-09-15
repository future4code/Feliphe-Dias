<h1>Exercícios Terça</h1>

<h2>1:</h2>
<h3>A:</h3>
<p>
Round é a quantidade de vezes que o a string será criptografada. quanto mais vezes mais seguro, mas mais custoso.
salt é uma string aleatória adicionada no processo para evitar que o hash gerado seja quebrado.
</p>

<h3>B:</h3>

<code>
 public static async generate(s: string): Promise< string>{
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(s, salt);
        return result
    }
</code>

<h3>C:</h3>
<code>
async compare(s: string, hash: string): Promise<boolean>{
        return await bcrypt.compare(s, hash);
    }
</code>
