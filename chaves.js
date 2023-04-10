// Verificando se cliente tem endereço cadastrado

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
     {
     rua: "R. Joseph Climber",
      numero: 1337,
     apartamento: true,
     complemento: "ap 934",
     },
  ];

  const chavesDoObejto = Object.keys(cliente);

  if (!chavesDoObejto.includes("enderecos")){
    console.error("Erro. É necessário cadastrar o endereço")
  }