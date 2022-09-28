'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()

class estadioRepository {

    constructor () {}

    async create(data) {
        let res = await firestore.collection('estadios').doc().set(data)
        return res
    }

    async update(id, data) {
        let estadio = await firestore.collection('estadios').doc(id)
        let res = await estadio.update(data)
        return res
    }

    async getAll() {
        let estadio = await firestore.collection('estadios');
        let res = await estadio.get();
        return res.docs
    }

    async getById(id) {
        let estadio = await firestore.collection('estadios').doc(id)
        let res = await estadio.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('estadios').doc(id).delete()
    }

}

module.exports = estadioRepository