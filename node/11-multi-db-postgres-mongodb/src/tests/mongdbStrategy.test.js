const assert = require('assert')
const MongoDB = require('./../db/strategies/mongodb')
const Context = require('./../db/strategies/base/contextStrategy')

const context = new Context(new MongoDB())
describe('MongoDB Suite de Testes', () => {
    this.beforeAll(async () => {
        await context.connect()
    })

    it('verificar conexao', async () => {
        const result = await context.isConnected()
        const expected = 'conectado'
        assert.deepEqual(result, expected)
    })
})