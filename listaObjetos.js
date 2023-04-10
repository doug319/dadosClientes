//Criando um objeto dentro de um obejto

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  }];

  cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
  })
  
const listaApenasApartamento = cliente.enderecos.filter(
  (endereço) => endereço.apartamento === true
);

  console.log(listaApenasApartamento);

