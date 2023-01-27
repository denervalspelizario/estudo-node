// modulo externo 
// inicia o projeto digitando comando npm init e como default(padrão) da enter em todas as perguntas e depois cria-se um pack-jason com as configs básicas
// depois de criado o pack-json basico d-se o comando para criar o pacote básico chamando minimist (npm install minimist) que ajudar a ler ARGUMENTOS pela linha de comando
const minimist = require("minimist"); //importando a biblioteca minimist

// modulo interno
const soma = require('./soma').soma  // usando require para pegar  funcao soma do arquivo soma e jogar na constante soma 

const args = minimist(process.argv.slice(2))  // resgatando o segundo argumento 

const a = parseInt(args['a']) // regantando argumento do args a  que vem em string e garantindo que vai ser inteiro com parseInt 
const b = parseInt(args['b']) // regantando argumento do args b  que vem em string e garantindo que vai ser inteiro com parseInt 
                              // obs o numero vem em string  e vira e pelo parseInt vira um numero inteiro                          


soma(a, b)

// para aplicar o comando é node index.js --a=numeroEscolhidoA  --b=numeroEscolhidoB