// nome

// passar 2 argumentos nome='nome qualquer' idade='idade qualquer' 
// process.argv mostra os argumentos executados que no caso são 5 neste exemplo

console.log(process.argv) // dando consoleg com argumento nome=Denerval  ou seja  node .\index.js nome=Denerval

const args = process.argv.slice(2)  // atravez do slice  ele me da o terceiro argumento(lembre se começa 0-3) pois tem 3 argumentos 

console.log(args) // na variavel args só consta o terceiro argumento que no caso é nome=Denerval

const nome = args[0].split("=")[1] // paga o argumento  0 e usa o split para divir em 2  e depois pega o indice 1 (o segundo) que n caso é o nome 

console.log(nome)

const idade = args[1].split('=')[1]

console.log(idade)

console.log(`o nome dele é ${nome} e sua idade é ${idade}`)