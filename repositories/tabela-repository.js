'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()

class tabelaRepository {

    constructor () {}

    async create(data) {
        let res = await firestore.collection('tabelas').doc().set(data)
        return res
    }

    async update(id, data) {
        let tabela = await firestore.collection('tabelas').doc(id)
        let res = await tabela.update(data)
        return res
    }

    async getAll() {
        let tabelas = await firestore.collection('tabelas');
        let res = await tabelas.get();
        return res.docs
    }

    async getById(id) {
        let tabela = await firestore.collection('tabelas').doc(id)
        let res = await tabela.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('tabelas').doc(id).delete()
    }

}

module.exports = tabelaRepository