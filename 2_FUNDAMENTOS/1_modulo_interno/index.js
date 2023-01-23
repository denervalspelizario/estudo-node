
const meuModulo = require('./meu_modulo') // require busca o arquivo - obs = nao precisa passar a extensão
const soma = meuModulo.soma   // puxando a funcao soma la do arquivo meu_modulo.js na const soma

const subtracao = meuModulo.subtracao // puxando a funcao subtracao la do arquivo meu_modulo.js na const subtracao
                                      // não precisa ali no meuModulo.subtracao o () pq isso chamaria a funcao naquele momento e estamos apenas exportando a infomação para a
                                      // a const subtracao              


soma(2,3)
soma(5,10)
subtracao(10,5)
subtracao(5,3)




