let entrada = document.querySelector( 'input' )
let saida = document.querySelector( 'output' )
let preenchimento = document.querySelector( '.preenchimento' )

let salarios = [
  {
    "de": 0,
    "ate": 1212,
    "mensagem": "Cerca de 55% dos jogadores profissionais ganham 1 salário mínimo. Calçar as chuteiras pode ser um bom negócio!"
  },
  {
    "de": 1212,
    "ate": 5000,
    "mensagem": "Somente 33% dos jogadores ganham entre R$ 1.212,00 a R$ 5.000,00. Pode ser escolha difícil..."
  },
  {
    "de": 5000,
    "ate": Infinity,
    "mensagem": "Tem que ter muita bola no pé para entrar no grupo seleto dos 12% dos jogadores mais bem pagos."
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