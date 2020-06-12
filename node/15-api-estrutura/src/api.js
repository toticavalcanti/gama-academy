// npm i hapi
const Hapi = require('hapi')
const Context = require('./db/strategies/base/contextStrategy')
const MongoDb = require('./db/strategies/mongodb/mongodb')
const HeroiSchema = require('./db/strategies/mongodb/schema/heroisSchema')
const HeroRoutes = require('./routes/heroRoutes')

const app = Hapi.Server({
    port: 5000
})

function mapRoutes(instance, methods) {
    return methods.map( method => instance[method]())
}

async function main() {
    const connection = MongoDb.connect()
    const context = new Context(new MongoDb(connection, HeroiSchema))
    console.log('mapRoutes', mapRoutes(new HeroRoutes(context), HeroRoutes.methods()))
    app.route([
        ...mapRoutes(new HeroRoutes(context), HeroRoutes.methods())
    ])

    await app.start()
    console.log('servidor rodando na porta', app.info.port)

    return app
}

module.exports = main()