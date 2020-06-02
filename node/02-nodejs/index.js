/*
0 - Obter um usuario
1 - Obter o numero de telefone de um usuario a partir de seu Id
2 - Obter o endereço de usuario pelo Id
*/

function obterUsuario(callback){

    setTimeout(function () { 

        return callback(null, {
            id: 1,
            nome: 'Toti',
            dataNascimento: new Date()
        })
 
    }, 1000)

}

function obterTelefone(idUsuario, callback) {
    setTimeout( () => {
        return callback(null, {
            telefone: '990027654',
            ddd: 11
        })
    }, 2000);

}

function obterEndereço(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);
}

// padrão callback
function resolverUsuario(erro, usuario){
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error('Deu ruim no usuário brow!', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error){
            console.error('Deu ruim no telefone brow!', error)
            return;
        }
        obterEndereço(usuario.id, function resolverEndereco(erro2, endereco){
            if(error) {
                console.error('Deu ruim no endereco')
                return;
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua},
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})
//const telefone = obterTelefone(usuario.id)


//console.log('telefone', telefone)