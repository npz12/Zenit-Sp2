var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM empresa WHERE emailEmpresa = '${email}' AND senhaEmpresa = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function entrarFuncionario(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM funcionario WHERE emailFuncionario = '${email}' AND senhaFuncionario = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, telefone, cnpj) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO empresa (nomeEmpresa, emailEmpresa, senhaEmpresa, CNPJ, telEmpresa) VALUES ('${nome}', '${email}', '${senha}', '${cnpj}','${telefone}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrarFuncionario(nome, email, senha, fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO funcionario (fkEmpresa, nomeFuncionario, senhaFuncionario, emailFuncionario) VALUES (${fkEmpresa},'${nome}', '${senha}', '${email}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function EmpresaNewEndereco(Rua, Bairro, Cidade, CEP, Numero, Complemento, fkEmpresa){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente");

    var instrucao = `INSERT INTO Endereco (ruaEmpresa, bairroEmpresa, cidadeEmpresa, CEPEmpresa, numeroEmpresa, complementoEmpresa, fkEmpresa) VALUES (
        '${Rua}','${Bairro}','${Cidade}','${CEP}',${Numero},'${Complemento}',${fkEmpresa});`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function EditarEnderecoEmpresa(Rua, Bairro, Cidade, CEP, Numero, Complemento, fkEmpresa ){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente");
    
    var instrucao = `UPDATE Endereco SET ruaEmpresa = '${Rua}', bairroEmpresa = '${Bairro}',
    cidadeEmpresa = '${Cidade}', CEPEmpresa = '${CEP}', numeroEmpresa = ${Numero},
    complementoEmpresa = '${Complemento}' WHERE fkEmpresa = ${fkEmpresa};`
    
    return database.executar(instrucao);
}
module.exports = {
    entrar,
    entrarFuncionario,
    cadastrarFuncionario,
    cadastrar,
    listar,
    EmpresaNewEndereco,
    EditarEnderecoEmpresa
};