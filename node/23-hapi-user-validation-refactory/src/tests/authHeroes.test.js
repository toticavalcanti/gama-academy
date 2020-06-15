const assert = require('assert')
const api = require('../api')
const Context = require('./../db/strategies/base/contextStrategy')
const PostGres = require('./../db/strategies/postgres/postgres')
const UsuarioSchema = require('./../db/strategies/postgres/schemas/usuarioSchema')
let app = {}

describe('Auth test suite', function () {
    this.beforeAll( async () => {
        app = await api
    })

    it('deve obter um token', async () => {
        const result = await app.inject ({
            method: 'POST',
            url: '/login',
            payload: {
                username: 'Olívia Palito',
                password: '123'
            }
        })
        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)
        assert.deepEqual(statusCode, 200)
        assert.ok(dados.token.length > 10)
    })
})