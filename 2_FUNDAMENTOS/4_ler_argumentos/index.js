// nome

console.log(process.argv) // dando consoleg com argumento nome=Denerval

const args = process.argv.slice(2)  

console.log(args)

const nome = args[0].split("=")[1] // paga o argumento  0 e usa o split para divir em 2  e depois pega o indice 1 (o segundo) que n caso é o nome 

console.log(nome)

const idade = args[1].split('=')[1]

console.log(idade)

console.log(`o nome dele é ${nome} e sua idade é ${idade}`)