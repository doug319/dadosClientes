
const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo){
            console.log("Saldo Insuficiente");
        }else {
            this.saldo -= valor;
            console.log(`Pagamento Realizado com Sucesso! Novo Saldo ${this.saldo}`);
        }
    }
  };

  cliente.efetuaPagamento(25);