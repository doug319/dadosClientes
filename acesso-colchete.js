const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

// Se não soubéssemos os valores das chaves do objeto

const chaves = ["nome", "idade", "cpf", "email"];
chaves.forEach(chave => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})