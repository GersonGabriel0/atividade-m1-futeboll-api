'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()

class timeRepository {

    constructor () {}

    async create(data) {
        let res = await firestore.collection('times').doc().set(data)
        return res
    }

    async update(id, data) {
        let time = await firestore.collection('times').doc(id)
        let res = await time.update(data)
        return res
    }

    async getAll() {
        let times = await firestore.collection('times');
        let res = await times.get();
        return res.docs
    }

    async getById(id) {
        let time = await firestore.collection('times').doc(id)
        let res = await time.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('times').doc(id).delete()
    }

}

module.exports = timeRepository