let entrada = document.querySelector( 'input' )
let saida = document.querySelector( 'output' )
let preenchimento = document.querySelector( '.preenchimento' )
//nesse ponto, delimita-se os intervalos de valores, que vai disparar uma mensagem correspondente.
//Os valores são de acordo com a pesquisa utilizada como base
//o primeiro tem como valor minimo 0 e máximo o do salário mínimo. Os seguintes seguem os valores da pesquisa base
let salarios = [
  {
    "de": 0,
    "ate": 1212,
    "mensagem": "Parabéns! Você já ganha como um jogador de futebol profissional no Brasil! Cerca de 55% dos jogadores profissionais ganham 1 salário mínimo!"
  },
  {
    "de": 1212,
    "ate": 5000,
    "mensagem": "Você só não ganha como um jogador de futebol, como está num grupo seleto: somente 33% dos jogadores ganham entre R$ 1.212,00 a R$ 5.000,00."
  },
  {
    "de": 5000,
    "ate": Infinity,
    "mensagem": "Você já ganha tão bem quanto os 12% dos jogadores mais bem pagos do país."
  },
  
]

entrada.addEventListener( 'input', validar )

function validar() {

  let valor = parseInt( entrada.value )
  
  if ( valor > 0 )
    calcular( valor )
  else
    limpar()

}

function calcular( valor ) {

  limpar()

  for ( let salario of salarios ) {

    if ( valor >= salario.de && valor <= salario.ate ) {
      mostrar( salario.mensagem )
      break
    }

  }

}
function mostrar( mensagem ) {
  saida.textContent = mensagem
}

function limpar() {
  saida.textContent =  ""
}