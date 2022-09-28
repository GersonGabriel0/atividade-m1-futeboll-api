'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()

class jogoRepository {

    constructor () {}

    async create(data) {
        let res = await firestore.collection('jogos').doc().set(data)
        return res
    }

    async update(id, data) {
        let jogo = await firestore.collection('jogos').doc(id)
        let res = await jogo.update(data)
        return res
    }

    async getAll() {
        let jogos = await firestore.collection('jogos');
        let res = await jogos.get();
        return res.docs
    }

    async getById(id) {
        let jogo = await firestore.collection('jogos').doc(id)
        let res = await jogo.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('jogos').doc(id).delete()
    }

}

module.exports = jogoRepository