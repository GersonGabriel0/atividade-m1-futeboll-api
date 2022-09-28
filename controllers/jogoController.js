'use strict'

const Jogo = require('../models/jogo')
const repository = require('../repositories/jogo-repository')

function jogoController() {}

jogoController.prototype.post = async (req, res) => {
    try {
        var body = req.body;
        if (body.timevisitante && body.timemandante) {
            await new repository().create(body)
            res.status(201).send('Registro criado com sucesso!')
        } else {
            res.status(400).send('Erro contem parametros faltando.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

jogoController.prototype.put = async (req, res) => {
    try {
        await new repository().update(req.params.id, req.body)
        res.status(202).send('Registro atualizado com sucess!!')
    } catch (error) {
        res.status(500).send(error)
    }
}

jogoController.prototype.get = async (req, res) => {
    try {
        let resultado = await new repository().getAll()
        const jogos = []
        resultado.forEach(doc => {
            const jogo = new Jogo(
                doc.id,
                doc.data().timevisitante,
                doc.data().timemandante,
                doc.data().result,
                doc.data().estadio
            )
            jogos.push(jogo)
        })
        if (jogos.length == 0) {
            res.status(404).send('Não há registros Disponiveis')
        } else {
            res.status(200).send(jogos)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

jogoController.prototype.getById = async (req, res) => {
    try {
        let resultado = await new repository().getById(req.params.id)
        const jogo = new Jogo(
            resultado.id,
            resultado.data().timevisitante,
            resultado.data().timemandante,
            resultado.data().result,
            resultado.data().estadio
        )
        res.status(200).send(jogo)
    } catch (error) {
        res.status(500).send(error)
    }
}

jogoController.prototype.delete = async (req, res) => {
    try {
        await new repository().delete(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = jogoController
