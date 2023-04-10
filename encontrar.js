const clientes = require("./clientes.json");

function encontrarCliente(lista, chave, valor){
    return lista.find(item => item[chave].includes(valor));
};

const clienteEncontrado = encontrarCliente(clientes, "telefone", "19918820860");

console.log(clienteEncontrado);

