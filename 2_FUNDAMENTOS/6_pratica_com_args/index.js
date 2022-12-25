const minimist = require("minimist"); //importando a biblioteca minimist

// modulo externo 
const args = minimist(process.argv.slice(2))  // resgatando o segundo argumento 

// modulo interno
const soma = require('./soma').soma  // usando require para pegar  funcao soma do arquivo soma e jogar na constante soma 

soma(2, 2)
