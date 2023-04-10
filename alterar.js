const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

//Adicionando chave e valor no objeto

pessoa.telefone = "11 99899989";

console.log(pessoa);

//Deletando chave e valor no objeto

delete pessoa.profissao;

console.log(pessoa);