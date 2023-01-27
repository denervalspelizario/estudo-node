const chalk = require('chalk') // importando o chalk atraves do require

const nota = 5
// comando só funcionado usando node index.js  no run não funciona
// com require o chalk que funciona é o comando  npm i chalk@4.1.2

if (nota >= 6){

    console.log(chalk.bgGreenBright.white.bold('Parabéns! Você foi aprovado!!'))  // chalk deixa na cor verde

} else {
    console.log(chalk.bgRed.italic.white('Parabéns! Você foi reprovado!!')) // chalk deixa o fundo red e cor de texto preta 
}