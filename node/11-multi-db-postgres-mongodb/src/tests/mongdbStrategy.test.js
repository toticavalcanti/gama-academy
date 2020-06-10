const MongoDB = require('./../db/strategies/mongodb')
const Context = require('./../db/strategies/base/contextStrategy')
const assert = require('assert')

const MOCK_HEROI_CADASTRAR = {
    nome: 'Mulher Maravilha',
    poder: 'laço'
}

const MOCK_HEROI_DEFAULT= {
    nome: `Homem Aranha${Date.now()}`,
    poder: 'Super teia'
}

const MOCK_HEROI_ATUALIZAR= {
    nome: `Patolino${Date.now()}`,
    poder: 'Velocidade'
}

let MOCK_HEROI_ID = ''

const context = new Context(new MongoDB())
describe('MongoDB Suite de Testes', function() {
    this.beforeAll(async () => {
        await context.connect()
        await context.create(MOCK_HEROI_DEFAULT)
        const result =await context.create(MOCK_HEROI_ATUALIZAR)
        MOCK_HEROI_ID = result._id
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

    it('listar', async () => {
        const [{nome, poder}] = await context.read({nome: MOCK_HEROI_DEFAULT.nome}).limit(2)
        const result = {
            nome, poder
        }
        assert.deepEqual(result, MOCK_HEROI_DEFAULT)
    })

    it('atualizar', async () => {
        console.log(MOCK_HEROI_ID)
        const result = await context.update(MOCK_HEROI_ID, {
            nome: 'Pernalonga',
        })
        console.log(result)
        assert.deepEqual(result.nModified, 1)
    })
})