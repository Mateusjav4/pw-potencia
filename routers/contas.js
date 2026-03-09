const express = require('express');
const router = express.Router();

router.get('/exec1', (req, res) => {
    const exercicio = {
        pergunta: "Qual é o valor de 10^3?",
        resposta: "10^3 = 10*10*10 = 1.000"
    }
    res.json(exercicio)
});

router.get('/exec2', (req, res) => {
    const exercicio = {
        pergunta: "Se uma fazenda tem 15 árvores, cada árvore com 10 galhos, e cada galho com 5 laranjas, quantas laranjas existem no total?",
        resposta: "15*10*5 = 750 laranjas"
    }
    res.json(exercicio)
});

router.get('/exec3', (req, res) => {
    const exercicio = {
        pergunta: "Qual é o valor de 4^3?",
        resposta: "4^3 = 4*4*4 = 64"
    }
    res.json(exercicio)
});

router.get('/exec4', (req, res) => {
    const exercicio = {
        pergunta: "Qual é o valor de (-3)^3?",
        resposta: "(-3)^3 = (-3)*(-3)*(-3) = -27"
    }
    res.json(exercicio)
});

router.get('/exec5', (req, res) => {
    const exercicio = {
        pergunta: "Se a^4 · a^2 = a^x, qual é o valor de x?",
        resposta: "a^4*a^2 = a^(4+2) = a^6"
    }
    res.json(exercicio)
});

router.get('/exec6', (req, res) => {
    const exercicio = {
        pergunta: "Um vírus triplica de quantidade a cada hora. Se inicialmente há 2 células infectadas, quantas células haverá após 4 horas?",
        resposta: "2*3^4 = 2*81 = 162 células"
    }
    res.json(exercicio)
});

router.get('/exec7', (req, res) => {
    const exercicio = {
        pergunta: "Se uma granja tem 2^2 galinheiros, cada galinheiro com 3 galinhas, e cada galinha bota 4 ovos por dia, quantos ovos são produzidos em 7 dias?",
        resposta: "2^2 = 4 galinheiros, 4*3*4*7 = 336 ovos"
    }
    res.json(exercicio)
});

router.get('/exec8', (req, res) => {
    const exercicio = {
        pergunta: "Quantos números de 4 dígitos diferentes podem ser formados usando apenas os números de 0 a 9?",
        resposta: "10^4 = 10.000 números diferentes"
    }
    res.json(exercicio)
});

router.get('/exec9', (req, res) => {
    const exercicio = {
        pergunta: "Uma empresa dobra seu estoque de computadores a cada ano. Se hoje há 256 computadores, quantos anos se passaram se o estoque inicial era 1 computador?",
        resposta: "2^8 = 256, portanto se passaram 8 anos"
    }
    res.json(exercicio)
});

router.get('/exec10', (req, res) => {
    const exercicio = {
        pergunta: "Uma colmeia possui 2^5 células. Se cada célula abriga 2^2 abelhas, qual é o total de abelhas na colmeia?",
        resposta: "2^5 = 32 células, 2^2 = 4 abelhas, 32*4 = 128 abelhas"
    }
    res.json(exercicio)
});

module.exports = router;