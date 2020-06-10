const MongoDB = require('./../db/strategies/mongodb')
const Context = require('./../db/strategies/base/contextStrategy')
const assert = require('assert')

const MOCK_HEROI_CADASTRAR = {
    nome: 'Mulher Maravilha',
    poder: 'laço'
}

const context = new Context(new MongoDB())
describe('MongoDB Suite de Testes', function() {
    this.beforeAll(async () => {
        await context.connect()
    })

    it('verificar conexao', async () => {
        const result = await context.isConnected()
        const expected = 'conectado'
        assert.deepEqual(result, expected)
    })

    it('cadastrar', async () => {
        const { nome, poder } = await context.create(MOCK_HEROI_CADASTRAR)
        assert.deepEqual({ nome, poder }, MOCK_HEROI_CADASTRAR)
    })
})