// inicia o projeto digitando comando npm init e como default(padrão) da enter em todas as perguntas e depois cria-se um pack-jason com as configs básicas
// depois de criado o pack-json basico d-se o comando para criar o pacote básico chamando minimist (npm install minimist) que ajudar a ler ARGUMENTOS pela linha de comando

const minimist = require("minimist"); //importando a biblioteca minimist  - obs sempre chamar o nome pelo nome que o módulo se chama isso é convenção


const args = minimist(process.argv.slice(2))  // resgatando o segundo argumento obs sempre lembrando de passar argumento quando der o comando exemplo  node index.js --nome=fulano

console.log(args)  // digite o comando  node index.js --nome=Denerval  --profissao=frontend-developer

const nome = args["nome"] // acessando a array
const profissao = args["profissao"] // acessando a array profissao

console.log(nome, profissao)
console.log(`O nome dele é ${nome} e sua proffisão é ${profissao}`)