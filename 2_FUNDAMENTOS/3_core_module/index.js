
const path = require('path')  // chamando o modulo path

const extension = path.extname("arquivo.php") //  jogando na variavel extension o  extname analisa qual o tipo de arquivo que no caso vai ser o php
const extension2 = path.extname("arquivo.pdf")
const extension3 = path.extname("arquivo.doc")

console.log(extension)
console.log(extension2)
console.log(extension3)