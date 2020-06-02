/*
0 - Obter um usuario
1 - Obter o numero de telefone de um usuario a partir de seu Id
2 - Obter o endereço de usuario pelo Id
*/

// importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(  ){
    //quando der algum problema -> reject(erro)
    //quando sucesso -> RESOLVE
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function () { 
            //return reject(new Error('Deu ruim de verdade'))
            return resolve({
                id: 1,
                nome: 'Toti',
                dataNascimento: new Date()
            })
     
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromisse(resolve, reject){
        setTimeout( () => {
            return resolve({
                telefone: '990027654',
                ddd: 11
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);
}

const usuarioPromise = obterUsuario()
// para manipular o sucesso, usamos a função .then
// para manipular erros, usamos o .catch
usuarioPromise
    .then(function (usuario){
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return{
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            }
        })
    })
    .then(function(resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        });
    })
    .then(function(resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome} 
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch(function (error) {
        console.log('Deu ruim', error)
    })


    // obterUsuario(function resolverUsuario(error, usuario){
//     if(error){
//         console.error('Deu ruim no usuário brow!', error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if(error){
//             console.error('Deu ruim no telefone brow!', error)
//             return;
//         }
//         obterEndereço(usuario.id, function resolverEndereco(erro2, endereco){
//             if(error) {
//                 console.error('Deu ruim no endereco')
//                 return;
//             }
//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereco: ${endereco.rua},
//                 Telefone: (${telefone.ddd}) ${telefone.telefone}
//             `)
//         })
//     })
// })
//const telefone = obterTelefone(usuario.id)


//console.log('telefone', telefone)