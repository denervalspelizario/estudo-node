const inquirer = require('inquirer')  // exportando o inquirer  obs- tem que instalar npm install inquirer  
                                      //comando que faz funcionar o inquirer com require  é o  npm install --save inquirer@^8.0.0  

inquirer.prompt([
    {
        name: 'p1',  // vai receber a nota
        message: 'Qual a primeira nota?'            // perguntas
    },
    {
        name: 'p2', // vai receber a nota
        message: 'Qual a segunda nota?'   // perguntas
    },
])
.then((answers) => {  //respostas - then(entao) - sempre que der certo nas perguntas desce para o then(então) que manipula a resposta 
    console.log(answers) // imprimindo a resposta
    const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2 )  // calculando média  usando parseInt pois recebemos os dados como string  e ele transforma em inteiro

    console.log(`A média é: ${media}`) // imprimindo a média
})  
.catch(err => console.log(err))  // catch - sempre que houve algum erro vai cair no catch

   // metodo responsavel por fazer as perguntas, dentro de um array e cada pergunta dentro de cada parenteses