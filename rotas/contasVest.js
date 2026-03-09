const express = require('express');
const router = express.Router();

router.get('/exec1', (req, res) => {
    const exercicio = {
        pergunta: "USP - A população de uma cidade é de aproximadamente 6,5 bilhões de habitantes. Expresse esse valor em notação científica.",
        resposta: "6.500.000.000 = 6.5 * 10^9"
    }

    res.json(exercicio);
});

router.get('/exec2', (req, res) => {
    const exercicio = {
        pergunta: "UNICAMP - Sabendo que x = 3^12 e y = 9^6, é correto afirmar que x = y?",
        resposta: "Sim, x = 3^12, y = 9^6 = (3^2)^6 = 3^12 → x = y"
    }

    res.json(exercicio);
});

router.get('/exec3', (req, res) => {
    const exercicio = {
        pergunta: "UFSC - Calcule o valor de 0,5^4 + 0,25^2",
        resposta: "0,5^4 = 0.0625, 0,25^2 = 0.0625, soma = 0.0625 + 0.0625 = 0.125"
    }

    res.json(exercicio);
});

router.get('/exec4', (req, res) => {
    const exercicio = {
        pergunta: "UFRJ - Uma fábrica descarta 250 litros de um produto químico que, a cada 50 litros, contamina 2 milhões de litros de água. Quantos litros de água seriam contaminados?",
        resposta: "50L produto → 2*10^6 L água contaminada, 250L → 2*10^6 * 5 = 10^7 L água contaminada"
    }

    res.json(exercicio);
});

router.get('/exec5', (req, res) => {
    const exercicio = {
        pergunta: "UNICAMP - Por qual potência de 10 deve-se multiplicar o número 10^-2 · 10^-4 para que o produto seja 1?",
        resposta: "10^-2 * 10^-4 * 10^6 = 1"
    }

    res.json(exercicio);
});



module.exports = router;