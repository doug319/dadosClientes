
// Puxando os dados do arquivo JSON
const dados = require("./cliente.json");

// Transformando objeto em string
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);

// Transformando string em objetos
const clienteEmObjeto = JSON.parse(clienteEmString);

console.log(clienteEmObjeto);
