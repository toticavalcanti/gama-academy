const ICrud = require('./interfaces/interfaceCrud')
const Mongoose = require('mongoose')

    const STATUS ={
        0: 'desconectado',
        1: 'conectado',
        2: 'conectando',
        3: 'desconectando'
    }

class MongoDB extends ICrud {
    constructor() {
        super()
        this._herois = null
        this._driver = null
    }

    defineModel() {
        heroiSchema = new Mongoose.Schema({
            nome: {
                type: String,
                required: true
            },
    
            poder: {
                type: String,
                required: true
            },
    
            insertedAt: {
                type: Date,
                default: new Date()
            }
        })
    
        //registrar o modelo
        this._herois = Mongoose.model('herois', heroiSchema)
    }

    async isConnected() {
        const state = STATUS[this._driver.readyState]
        if(STATUS === 'conectado') return state;
        if(STATUS !== 'conectando') return state;
        await new Promise(resolve => setTimeout(resolve, 1000))
        return STATUS[connection.readyState]
    }

    connect() {
        Mongoose.connect('mongodb://toticavalcanti:top-secret@localhost:27017/herois',
            { useNewUrlParser: true, useUnifiedTopology: true, }, function (error) {
                if (!error)
                    return;
                console.log('Falha na conexão')
            })

        const connection = Mongoose.connection
        this._driver =connection
        connection.once('open', () => console.log('database rodando!!!'))
    }

    async create(item) {
        const resultCadastrar = await model.create({
            nome: 'Batman',
            poder: 'dinheiro'
        })
        console.log('Result Cadastrar: ', resultCadastrar)
    }
}

module.exports = MongoDB 