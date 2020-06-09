const assert = require('assert')
const MongoDB = require('./../db/strategies/mongodb')
const context = require('./../db/strategies/base/contextStrategy')

const context = new context(new MongoDB())
describe('MongoDB Suite de Testes', function(){
    this.beforeAll(async () => {
        await context.connect()
    })

    it('verificar conexao', async () => {
        const result = await context.isConnected()
        const expected = 'Conectado'

        assert.deepEqual(result, expected)
    })
})