const minimist = require("minimist"); //importando a biblioteca minimist


const args = minimist(process.argv.slice(2))  // resgatando o segundo argumento 

console.log(args)  // digite o comando  node index.js --nome=Denerval  --profissao=frontend-developer

const nome = args["nome"] // acessando a array
const profissao = args["profissao"] // acessando a array profissao

console.log(nome, profissao)
console.log(`O nome dele é ${nome} e sua proffisão é ${profissao}`)