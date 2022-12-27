const readline = require('readline').createInterface({  // importando o readline e ja executando usando o createInterface

    input: process.stdin,  // configurtações para receber dados e enviar dados aos usuários
    output: process.stdout,

})


readline.question("Qual a sua linguagem preferida? ", (language) => {   // a arrow function é o segundo argumento que vai trabalhart com o segundo dado da pergunta
  
    if(language === 'php'){
        
        console.log("Isso ném é linguagem")
    
    } else {

        console.log(`A minha linguagem preferida é ${language}`)
    }
  
    
    readline.close()  // fechando a execução
})