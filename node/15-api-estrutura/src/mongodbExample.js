const Mongoose = require('mongoose')
Mongoose.connect('mongodb://toticavalcanti:top-secret@localhost:27017/herois', 
    {useNewUrlParser: true, useUnifiedTopology: true,}, function (error) {
        if(!error) 
            return;
        console.log('Falha na conexão')
    })

    const connection = Mongoose.connection

    connection.once('open', () => console.log('database rodando!!!')) 
    /*
        0: desconectado
        1: conectado
        2: conectando
        3: desconectando
     */
    // setTimeout(() => {
    //     const state = connection.readyState
    //     console.log('state: ', state)
    // }, 1000)

    // const state = connection.readyState
    // console.log('state: ', state)
    const heroiSchema = new Mongoose.Schema({
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
    const model = Mongoose.model('heroi', heroiSchema)

    async function main(){
        const resultCadastrar = await model.create({
            nome: 'Batman',
            poder: 'dinheiro'
        })
        console.log('Result Cadastrar: ', resultCadastrar)

        const listItems = await model.find()
        console.log('Items: ', listItems)
    }

    main()