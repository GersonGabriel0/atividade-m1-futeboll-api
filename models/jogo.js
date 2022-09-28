// Definindo a classe jogo
class jogo {
    constructor(
        id,
        timevisitante, 
        timemandante,
        result,
        estadio
    ) {
        this.id = id
        this.timevisitante = timevisitante
        this.timemandante = timemandante
        this.resultado = result
        this.estadio = estadio
    }
}

module.exports = jogo
