const ICrud = require('./interfaces/interfaceCrud')
const Mongoose = require('mongoose')

class MongoDB extends ICrud {
    constructor(){
        super()
    }

    defineModel() {
        
    }

    isConnected() {

    }

    connect() {

    }

    create(item){
        console.log('O item foi salvo no MongoDB')
    }
}

module.exports = MongoDB 