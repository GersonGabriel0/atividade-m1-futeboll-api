// Definindo a classe Tabela
class Tabela {
    constructor(
        id,
        time, 
        ponto,
        vitoria,
        derrota,
        empate
    ) {
        this.id = id
        this.time = time
        this.pontos = ponto
        this.vitoria = vitoria
        this.derrota = derrota
        this.empate = empate
    }
}

module.exports = Tabela
