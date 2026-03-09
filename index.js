const express = require('express');

const app = express()

const PORTA = 3000

app.use(express.urlencoded({extended: true}))

app.use(express.json())


app.get("/", async (req, res) => {
    res.send(`
    <h1 style="font-family: Arial, sans-serif;">
        Rotas disponíveis
    </h1>

    <ul style="font-family: Arial, sans-serif; font-size: 18px;">
        <li><a href="/propriedades">/propriedades</a></li>
        
        <br>
        
        <li><a href="/contas/exec1">/contas/exec1</a></li>
        <li><a href="/contas/exec1">/contas/exec2</a></li>
        <li><a href="/contas/exec1">/contas/exec3</a></li>
        <li><a href="/contas/exec1">/contas/exec4</a></li>
        <li><a href="/contas/exec1">/contas/exec5</a></li>
        <li><a href="/contas/exec1">/contas/exec6</a></li>
        <li><a href="/contas/exec1">/contas/exec7</a></li>
        <li><a href="/contas/exec1">/contas/exec8</a></li>
        <li><a href="/contas/exec1">/contas/exec9</a></li>
        <li><a href="/contas/exec1">/contas/exec10</a></li>

        <br>

        <li><a href="/contasVest/exec1">/contasVest/exec1</a></li>
        <li><a href="/contasVest/exec1">/contasVest/exec2</a></li>
        <li><a href="/contasVest/exec1">/contasVest/exec3</a></li>
        <li><a href="/contasVest/exec1">/contasVest/exec4</a></li>
        <li><a href="/contasVest/exec1">/contasVest/exec5</a></li>
    
    </ul>
`);
})

app.get("/propriedades", async (req, res) => {
    const propriedades = [
        {
            nome: "1. Produto de potências de mesma base",
            formula: "a^m * a^n = a^(m+n)",
            exemplo: "2^3 * 2^5 = 2^(3+5) = 2^8 = 256"
        },
        {
            nome: "2. Quociente de potências de mesma base",
            formula: "a^m ÷ a^n = a^(m-n)   (a ≠ 0)",
            exemplo: "5^7 ÷ 5^2 = 5^(7-2) = 5^5 = 3125"
        },
        {
            nome: "3. Potência de potência",
            formula: "(a^m)^n = a^(m*n)",
            exemplo: "(3^2)^4 = 3^(2*4) = 3^8 = 6561"
        },
        {
            nome: "4. Potência de um produto",
            formula: "(a * b)^n = a^n * b^n",
            exemplo: "(2 * 5)^3 = 2^3 * 5^3 = 8 * 125 = 1000"
        },
        {
            nome: "5. Potência de um quociente",
            formula: "(a ÷ b)^n = a^n ÷ b^n   (b ≠ 0)",
            exemplo: "(6 ÷ 2)^2 = 6^2 ÷ 2^2 = 36 ÷ 4 = 9"
        },
        {
            nome: "6. Expoente zero",
            formula: "a^0 = 1   (a ≠ 0)",
            exemplo: "7^0 = 1    |    (qualquer número ≠ 0)^0 = 1"
        },
        {
            nome: "7. Expoente um",
            formula: "a^1 = a",
            exemplo: "10^1 = 10"
        },
        {
            nome: "8. Expoente negativo",
            formula: "a^(-n) = 1 / a^n   (a ≠ 0)",
            exemplo: "2^(-3) = 1 / 2^3 = 1/8 = 0,125"
        }
    ];

    res.json({ propriedades });
});

const contasRouter = require('./rotas/contas.js')
app.use('/contas', contasRouter)

const contasVestRouter = require('./rotas/contasVest.js')
app.use('/contasVest', contasVestRouter)



app.listen(PORTA, () => {
    console.log("Rodando na porta: " + PORTA)
})


