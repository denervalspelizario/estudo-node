
const fs = require('fs') // file system

fs.readFile('arquivo.txt', 'utf8', (err, data) => {  // funcao que busca o arquivo txt, e adiciona condicional se achar o aquivo imprime senao imprime erro 
    if(err){
        console.log(err)
        return
    }

    console.log(data)


})

let a = 10
let b = 15
console.log(a + b)