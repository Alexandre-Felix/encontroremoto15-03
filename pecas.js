let pesoPeca = 100
let numeroPecas = 10
let listaPecas = ["Disco de freio", "Volante", "Tambor", "Correia", "Polia", "Disco de freio", "Tensor", "Tambor", "Correia", "Polia"]
let nomePeca = "Disco de Freio"

if (pesoPeca >= 100) {
    // Podemos cadastrar
    console.log("Peso adequado, podemos cadastro")     
} else {
    // Não podemos cadastrar
    console.log("Peso menor que 100g, não podemos cadastrar")
}

if (listaPecas.length >= 10) {
    // Capacidade máxima atingida
    console.log("Capacidade máxima atingida")
    } else {
        // Ainda há espaço para cadastro
        console.log("Ainda há espaço para cadastro")
    }

  if (nomePeca.length < 3) {
      // Nome inválido
      console.log("Nome inválido, o nome precisa ter 3 caracteres ou mais")
  } else {
      // Nome da peça adequado
      console.log("Nome adequado")
  }  