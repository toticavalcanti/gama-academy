class Cliente {
  constructor() {
    this.id = 0;
    this.name = '';
    this.telefone = '';
  }

  nomeUppercase(){
    return this.name.toUpperCase()
  }

  static primeiro(){
    return new Cliente();
  }

  static todos(){
    return [
     new Cliente(), 
     new Cliente(),  
     new Cliente(),  
     new Cliente(),  
     new Cliente(),  
     new Cliente(),  
     new Cliente(),  
     new Cliente(),  
     new Cliente(),  
     new Cliente(),
    ]     
  }
}

module.exports = Cliente;