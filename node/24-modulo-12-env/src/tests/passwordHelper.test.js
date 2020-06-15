const assert = require('assert')
const PasswordHelper = require('../helpers/passwordHelper')

const SENHA = 'Toti@123321123'
const HASH = '$2b$04$HCk0f2rcMgtNNG/P7kvQ4uv/LPuodcwfGEyrfal4OGH53beU0LIgS'

//const HASH = '$2b$04$Z7R19my4JkAlxwYng5wbge4fZYM.MGIveRJUuKjOvL20Ouh799rLW'
describe('UserHelper test suite', function () {
    it('deve gerar um hash a partir de uma senha', async () => {
        const result = await PasswordHelper.hashPassword(SENHA)
        assert.ok(result.length > 10)
    })

    it('deve comparar uma senha e seu hash', async () => {
        const result = await PasswordHelper.comparePassword(SENHA, HASH)
        console.log('result', result)
        assert.ok(result)
    })
})