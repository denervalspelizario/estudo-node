// modulo externo 
const minimist = require("minimist"); //importando a biblioteca minimist

// modulo interno
const soma = require('./soma').soma  // usando require para pegar  funcao soma do arquivo soma e jogar na constante soma 

const args = minimist(process.argv.slice(2))  // resgatando o segundo argumento 

const a = parseInt(args['a']) // regantando argumento do args a  que vem em string e garantindo que vai ser inteiro com parseInt 
const b = parseInt(args['b']) // regantando argumento do args b  que vem em string e garantindo que vai ser inteiro com parseInt 


soma(2, 2)