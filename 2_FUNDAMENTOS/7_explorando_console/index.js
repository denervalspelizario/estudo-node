// mais de um valor

const x = 10;
const y = 'Denerval';
const z = [1,2,3];

console.log(x, y, z) // imprimindo tudo de uma vez só usando virgula

// contagem de impressoes maneira mais usada - template strigs

console.count(`O valor de x é: ${x}, contagem`) // count exibe quantas vezes ele é chamado no caso 1
console.count(`O valor de x é: ${x}, contagem`) // count exibe quantas vezes ele é chamado no caso 2
console.count(`O valor de x é: ${x}, contagem`) // count exibe quantas vezes ele é chamado no caso 3
console.count(`O valor de x é: ${x}, contagem`) // count exibe quantas vezes ele é chamado no caso 4

// variavel entre string

console.log("O nome é %s e ele é programador", y) // o %s  assume valor da variavel y

// limpar o console

setTimeout(() => { // foi visto la no programação assicrona funcao que executa depois de 2000 milisegundos vulgos 2 segundos

    console.clear() // clear limpa todos console.logs zerando o console

},2000)