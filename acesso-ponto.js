const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente.nome} e sua idade é ${cliente.idade} anos!`);

console.log(`Os três primeiros dígitos do cpf são ${cliente.cpf.substring(0,3)}`);