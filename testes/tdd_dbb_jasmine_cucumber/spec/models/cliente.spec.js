const Cliente = require('../../models/cliente');

describe('Clientes', () => {
  beforeEach( () => {

  })

  it('Valida propriedades de um cliente', () => {
    let cliente = Cliente.primeiro();
    expect(cliente.id).not.toBeUndefined();
    expect(cliente.nome).not.toBeUndefined();
    expect(cliente.telefone).not.toBeUndefined();

  });

  it('Retorna todos', () => {
    let clientes = Cliente.todos();
    expect(clientes.length).toEqual(10)
  });

  it('Nome do cliente em Uppercase', () => {
    let cliente = Cliente.primeiro();
    cliente.nome = 'toti';
    expect(cliente.nomeUppercase()).toEqual('TOTI');
  })

})
