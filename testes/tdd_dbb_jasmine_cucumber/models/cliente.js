class Cliente {
  constructor(_id=0, _nome="", _telefone="") {
    this.id = _id;
    this.nome = _nome;
    this.telefone = _telefone;
  }

  nomeUppercase(){
    return this.nome.toUpperCase()
  }

  static primeiro(){
    return new Cliente();
  }

  static todos(){
    return [
     new Cliente(1, "Toti Cavalcanti", "21988714006"), 
     new Cliente(2, "Walter D. Jr.", "21988344076"), 
     new Cliente(3, "Otília", "21988764006"), 
     new Cliente(4, "José Temóteo", "21988714406"), 
     new Cliente(5, "Maria Lira dos Santos", "21988714606"), 
     new Cliente(6, "Carlos Souza", "21988714006"), 
     new Cliente(7, "Josivaldo Correia Severo", "21986814006"), 
     new Cliente(8, "Jacilda Silva", "21988714006"), 
     new Cliente(9, "Álvaro Garcia", "21988714006"), 
     new Cliente(10, "Orlando Silva", "21988714006"), 
    ]     
  }
}

module.exports = Cliente;