'use strict'

const Jogador = require('../models/jogador')
const repository = require('../repositories/jogador-repository')

function jogadorController() {}

jogadorController.prototype.post = async (req, res) => {
    try {
        var body = req.body;
        if (body.nome && body.idade) {
            await new repository().create(body)
            res.status(201).send('Registro criado com sucesso!')
        } else {
            res.status(400).send('Erro contem parametros faltando.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

jogadorController.prototype.put = async (req, res) => {
    try {
        await new repository().update(req.params.id, req.body)
        res.status(202).send('Registro atualizado com sucess!!')
    } catch (error) {
        res.status(500).send(error)
    }
}

jogadorController.prototype.get = async (req, res) => {
    try {
        let resultado = await new repository().getAll()
        const jogadors = []
        resultado.forEach(doc => {
            const jogador = new Jogador(
                doc.id,
                doc.data().nome,
                doc.data().idade,
                doc.data().time,
                doc.data().salario
            )
            jogadors.push(jogador)
        })
        if (jogadors.length == 0) {
            res.status(404).send('Não há registros Disponiveis')
        } else {
            res.status(200).send(jogadors)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

jogadorController.prototype.getById = async (req, res) => {
    try {
        let resultado = await new repository().getById(req.params.id)
        const jogador = new Jogador(
            resultado.id,
            resultado.data().nome,
            resultado.data().idade,
            resultado.data().time,
            resultado.data().salario
        )
        res.status(200).send(jogador)
    } catch (error) {
        res.status(500).send(error)
    }
}

jogadorController.prototype.delete = async (req, res) => {
    try {
        await new repository().delete(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = jogadorController
