const assert = require('assert')
const api = require('../api')
const Context = require('./../db/strategies/base/contextStrategy')
const PostGres = require('./../db/strategies/postgres/postgres')
const UsuarioSchema = require('./../db/strategies/postgres/schemas/usuarioSchema')

let app = {}
const USER = {
    username: 'Olívia Palito',
    password: '123'
}

const USER_DB = {

}

describe('Auth test suite', function () {
    this.beforeAll( async () => {
        app = await api

        const connectionPostgres = await PostGres.connect()
        const model = await PostGres.defineModel(connectionPostgres, UsuarioSchema)
        //const result = await 
    })

    it('deve obter um token', async () => {
        const result = await app.inject ({
            method: 'POST',
            url: '/login',
            payload: USER

        })
        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)
        assert.deepEqual(statusCode, 200)
        assert.ok(dados.token.length > 10)
    })
})