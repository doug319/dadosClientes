// filtrando os dados: apartamentos sem complemento

const clientes = require("./clientes.json");

function filtrarApartamentosSemComplemento (clientes){
    return clientes.filter(cliente => cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
}

const filtrados = filtrarApartamentosSemComplemento(clientes);

console.log(filtrados);