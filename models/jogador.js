// Definindo a classe Jogador
class Jogador {
    constructor(
        id,
        nome, 
        idade,
        time,
        salario
    ) {
        this.id = id
        this.nome = nome
        this.idade = idade
        this.time = time
        this.salario = salario
    }
}

module.exports = Jogador
