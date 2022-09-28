'use strict'

const Tabela = require('../models/tabela')
const repository = require('../repositories/tabela-repository')

function tabelaController() {}

tabelaController.prototype.post = async (req, res) => {
    try {
        var body = req.body;
        if (body.time && body.ponto) {
            await new repository().create(body)
            res.status(201).send('Registro criado com sucesso!')
        } else {
            res.status(400).send('Erro contem parametros faltando.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

tabelaController.prototype.put = async (req, res) => {
    try {
        await new repository().update(req.params.id, req.body)
        res.status(202).send('Registro atualizado com sucess!!')
    } catch (error) {
        res.status(500).send(error)
    }
}

tabelaController.prototype.get = async (req, res) => {
    try {
        let resultado = await new repository().getAll()
        const tabelas = []
        resultado.forEach(doc => {
            const tabela = new Tabela(
                doc.id,
                doc.data().time,
                doc.data().ponto,
                doc.data().vitoria,
                doc.data().derrota,
                doc.data().empate
            )
            tabelas.push(tabela)
        })
        if (tabelas.length == 0) {
            res.status(404).send('Não há registros Disponiveis')
        } else {
            res.status(200).send(tabelas)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

tabelaController.prototype.getById = async (req, res) => {
    try {
        let resultado = await new repository().getById(req.params.id)
        const tabela = new Tabela(
            resultado.id,
            resultado.data().time,
            resultado.data().ponto,
            resultado.data().vitoria,
            resultado.data().derrota,
            resultado.data().empate
        )
        res.status(200).send(tabela)
    } catch (error) {
        res.status(500).send(error)
    }
}

tabelaController.prototype.delete = async (req, res) => {
    try {
        await new repository().delete(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = tabelaController
