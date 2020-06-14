// npm i hapi
// npm i vision inert hapi-swagger

const Hapi = require('hapi')
const Context = require('./db/strategies/base/contextStrategy')
const MongoDb = require('./db/strategies/mongodb/mongodb')
const HeroiSchema = require('./db/strategies/mongodb/schema/heroisSchema')
const HeroRoutes = require('./routes/heroRoutes')

const HapiSwagger = require('hapi-swagger')
const Vision = require('vision')
const Inert = require('inert')

const app = Hapi.Server({
    port: 5000
})

function mapRoutes(instance, methods) {
    return methods.map( method => instance[method]())
}

async function main() {
    const connection = MongoDb.connect()
    const context = new Context(new MongoDb(connection, HeroiSchema))

    const swaggerOtpions = {
        info:{
            title: 'API Herois - Toti Cavalcanti',
            version: 'v1.0'
        },
        lang: 'pt'
    }

    await app.register([
        Vision,
        Inert,
        {
            plugin: HapiSwagger,
            options: swaggerOtpions
        }
    ])
    
    app.route( 
        mapRoutes(new HeroRoutes(context), HeroRoutes.methods()) 
    )

    await app.start()
    console.log('servidor rodando na porta', app.info.port)

    return app
}

module.exports = main()