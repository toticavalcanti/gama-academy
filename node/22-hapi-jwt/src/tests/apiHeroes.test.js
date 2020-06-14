const assert = require('assert')
const api = require('../api')
let app = {}
const MOCK_HEROI_CADASTRAR = {
    nome: 'Chapolin Colorado',
    poder: 'marreta biônica'
}

const MOCK_HEROI_INICIAL = {
    nome: 'Gavião Negor',
    poder: 'A mira'
}

let MOCK_ID = ''
describe('Suite de testes da API Heroes', function () {
    this.beforeAll(async () => {
        app = await api
        const result = await app.inject({
            method: 'POST',
            url: '/herois',
            payload: JSON.stringify(MOCK_HEROI_INICIAL)                
        })
        const dados = JSON.parse(result.payload)
        MOCK_ID = dados._id
    })

    it('listar /herois', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/herois?skip=0&limit=10'
        })

        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
        assert.deepEqual(statusCode, 200)
        assert.ok(Array.isArray(dados))
    })

    it('listar /herois - deve retornar somente 3 registros', async () => {
        const TAMANHO_LIMIT = 3
        const result = await app.inject({
            method: 'GET',
            url: `/herois?skip=0&limit=${TAMANHO_LIMIT}`
        })

        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
        assert.deepEqual(statusCode, 200)
        assert.ok(dados.length === TAMANHO_LIMIT)
    })

    it('listar /herois - deve retornar um erro com limit incorreto', async () => {
        const TAMANHO_LIMIT = 'AEE'
        const result = await app.inject({
            method: 'GET',
            url: `/herois?skip=0&limit=${TAMANHO_LIMIT}`
        })
        const erroResult = {
            "statusCode": 400,
            "error": "Bad Request", 
            "message": "child \"limit\" fails because [\"limit\" must be a number]", 
            "validation": { 
                "source": "query", 
                "keys": ["limit"] 
            }
        }
        assert.deepEqual(result.statusCode, 400)
        assert.deepEqual(result.payload, JSON.stringify(erroResult))
    })

    it('listar GET - /herois - deve filtrar um item', async () => {
        const TAMANHO_LIMIT = 100
        const NAME = MOCK_HEROI_INICIAL.nome
        const result = await app.inject({
            method: 'GET',
            url: `/herois?skip=0&limit=${TAMANHO_LIMIT}&nome=${NAME}`
        })
        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
        assert.deepEqual(statusCode, 200)
        assert.ok(dados[0].nome === NAME)
    })

    it('cadastrar POST - /herois', async () => {
        const result = await app.inject({
            method: 'POST',
            url: `/herois`,
            payload: MOCK_HEROI_CADASTRAR
        })
        const statusCode = result.statusCode
        const { 
            message,
            _id
        } = JSON.parse(result.payload)

        assert.ok(statusCode === 200)
        assert.notStrictEqual(_id, undefined)
        assert.deepEqual(message, "Heroi cadastrado com sucesso!")
    })

    it('atualizar PATCH - /herois/:id', async () => {
        const _id = MOCK_ID
        const expected = {
            poder: 'super mira'
        }
        const result = await app.inject({
            method: 'PATCH',
            url: `/herois/${_id}`,
            payload: JSON.stringify(expected)
        })
        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)
        assert.ok(statusCode === 200)
        assert.deepEqual(dados.message, 'Heroi atualizado com sucesso!')
    })

    it('atualizar PATCH - /herois/:id - não deve atualizar com o id incorreto', 
        async () => {
            const _id = `5ee10b578400a9172d53fc57`
            const result = await app.inject({
                method: 'PATCH',
                url: `/herois/${_id}`,
                payload: JSON.stringify({
                    poder: 'super mira'
                })
            })
            const statusCode = result.statusCode
            const dados = JSON.parse(result.payload)
            expected = { 
                statusCode: 412,
                error: 'Precondition Failed',
                message: 'Id não encontrado no banco!' }
            assert.ok(statusCode === 412)
            assert.deepEqual(dados, expected)
        })

    it('remover DELETE - /herois/:id', 
        async () => {
            const _id = MOCK_ID
            const result = await app.inject({
                method: 'DELETE',
                url: `/herois/${_id}`
            })
            const statusCode = result.statusCode
            const dados = JSON.parse(result.payload)

            assert.ok(statusCode === 200)
            assert.deepEqual(dados.message, 'Heroi removido com sucesso!')
    })

    it('remover DELETE - /herois/:id - não deve remover id não encontrado', 
        async () => {
            const _id = `5ee10b578400a9172d53fc57`
            const result = await app.inject({
                method: 'DELETE',
                url: `/herois/${_id}`
            })
            const statusCode = result.statusCode
            const dados = JSON.parse(result.payload)
            const expected = { 
                statusCode: 412,
                error: 'Precondition Failed',
                message: 'Id não encontrado no banco!' 
            }
            assert.ok(statusCode === 412)
            assert.deepEqual(dados, expected)
    })

    it('remover DELETE - /herois/:id - não deve remover id inválido', 
        async () => {
            const _id = 'ID_INVALIDO'
            const result = await app.inject({
                method: 'DELETE',
                url: `/herois/${_id}`
            })
            const statusCode = result.statusCode
            const dados = JSON.parse(result.payload)
            const expected = { 
                statusCode: 500,
                error: 'Internal Server Error',
                message: 'An internal server error occurred' 
            }
            assert.ok(statusCode === 500)
            assert.deepEqual(dados, expected)
    })
})
