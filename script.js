// 1 - crie uma função que exiba uma mensagem no console
 function mensagem(){
     console.log('Olá')
   }
  
   mensagem()
  
// 2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
   function meuNome(nome){
     console.log(`Meu nome é ${nome}!`)
   }
   meuNome('Dell')
  
// 3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
  
   function dados(nome, idade, estiloMusical){
     console.log(`Meu nome é ${nome}, eu tenho ${idade} anos e gosto de ${estiloMusical}`)
   }
  
   dados('Dell', 27, 'Trap')
  
// 4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
   function info(filme, musica){
     console.log(`Eu gosto de ver ${filme} e de ouvir ${musica}`)
   }
   info('Jack Reacher', 'Fight')

//Bônus:
  
// 5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
  
   function conta(x){
     return x*3
   }
  
   console.log(conta(26))
