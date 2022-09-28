'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()

class jogadorRepository {

    constructor () {}

    async create(data) {
        let res = await firestore.collection('jogadors').doc().set(data)
        return res
    }

    async update(id, data) {
        let jogador = await firestore.collection('jogadors').doc(id)
        let res = await jogador.update(data)
        return res
    }

    async getAll() {
        let jogadors = await firestore.collection('jogadors');
        let res = await jogadors.get();
        return res.docs
    }

    async getById(id) {
        let jogador = await firestore.collection('jogadors').doc(id)
        let res = await jogador.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('jogadors').doc(id).delete()
    }

}

module.exports = jogadorRepository