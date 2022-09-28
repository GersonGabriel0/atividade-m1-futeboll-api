'use strict'

const Estadio = require('../models/estadio')
const repository = require('../repositories/estadio-repository')

function estadioController() {}

estadioController.prototype.post = async (req, res) => {
    try {
        var body = req.body;
        if (body.nome && body.local) {
            await new repository().create(body)
            res.status(201).send('Registro criado com sucesso!')
        } else {
            res.status(400).send('Erro contem parametros faltando.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

estadioController.prototype.put = async (req, res) => {
    try {
        await new repository().update(req.params.id, req.body)
        res.status(202).send('Registro atualizado com sucess!!')
    } catch (error) {
        res.status(500).send(error)
    }
}

estadioController.prototype.get = async (req, res) => {
    try {
        let resultado = await new repository().getAll()
        const estadios = []
        resultado.forEach(doc => {
            const estadio = new Estadio(
                doc.id,
                doc.data().nome,
                doc.data().local,
                doc.data().capacidade,
                doc.data().selecao
            )
            estadios.push(estadio)
        })
        if (estadios.length == 0) {
            res.status(404).send('Não há registros Disponiveis')
        } else {
            res.status(200).send(estadios)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

estadioController.prototype.getById = async (req, res) => {
    try {
        let resultado = await new repository().getById(req.params.id)
        const estadio = new Estadio(
            resultado.id,
            resultado.data().nome,
            resultado.data().local,
            resultado.data().capacidade,
            resultado.data().selecao
        )
        res.status(200).send(estadio)
    } catch (error) {
        res.status(500).send(error)
    }
}

estadioController.prototype.delete = async (req, res) => {
    try {
        await new repository().delete(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = estadioController
