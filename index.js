class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "atacou";
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const mago = new Hero("Merlin", 100, "mago");
  const guerreiro = new Hero("Arthur", 35, "guerreiro");
  const monge = new Hero("Lee", 40, "monge");
  const ninja = new Hero("Hanzo", 30, "ninja");
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();
  