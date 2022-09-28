// Definindo a classe Estadio
class Estadio {
    constructor(
        id,
        nome, 
        local,
        capacidade,
        selecao
    ) {
        this.id = id
        this.nome = nome
        this.local = local
        this.capacidade = capacidade
        this.selecao = selecao
    }
}

module.exports = Estadio

