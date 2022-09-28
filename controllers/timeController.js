'use strict'

const Time = require('../models/time')
const repository = require('../repositories/time-repository')

function timeController() {}

timeController.prototype.post = async (req, res) => {
    try {
        var body = req.body;
        if (body.nome && body.patrimonio) {
            await new repository().create(body)
            res.status(201).send('Registro criado com sucesso!')
        } else {
            res.status(400).send('Erro contem parametros faltando.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

timeController.prototype.put = async (req, res) => {
    try {
        await new repository().update(req.params.id, req.body)
        res.status(202).send('Registro atualizado com sucess!!')
    } catch (error) {
        res.status(500).send(error)
    }
}

timeController.prototype.get = async (req, res) => {
    try {
        let resultado = await new repository().getAll()
        const times = []
        resultado.forEach(doc => {
            const time = new Time(
                doc.id,
                doc.data().nome,
                doc.data().patrimonio,
                doc.data().estadio,
                doc.data().qtdjogadores
            )
            times.push(time)
        })
        if (times.length == 0) {
            res.status(404).send('Não há registros Disponiveis')
        } else {
            res.status(200).send(times)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

timeController.prototype.getById = async (req, res) => {
    try {
        let resultado = await new repository().getById(req.params.id)
        const time = new Time(
            resultado.id,
            resultado.data().nome,
            resultado.data().patrimonio,
            resultado.data().estadio,
            resultado.data().qtdjogadores
        )
        res.status(200).send(time)
    } catch (error) {
        res.status(500).send(error)
    }
}

timeController.prototype.delete = async (req, res) => {
    try {
        await new repository().delete(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = timeController
