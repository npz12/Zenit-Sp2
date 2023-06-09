var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
function entrarFuncionario(req, res) {
    var email = req.body.emailFuncServer;
    var senha = req.body.senhaFuncServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrarFuncionario(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefone = req.body.telServer;
    var cnpj = req.body.cnpjServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, telefone, cnpj)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrarFuncionario(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fkEmpresa = req.body.idServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrarFuncionario(nome, email, senha, fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
function EmpresaNewEndereco(req, res) {
    var Rua = req.body.RuaServer;
    var Bairro = req.body.BairroServer;
    var Cidade = req.body.CidadeServer;
    var CEP = req.body.CEPServer;
    var Numero = req.body.NumeroServer;
    var Complemento = req.body.ComplementoServer;
    var fkEmpresa = req.body.fkEmpresaServer;
    
    if (Rua == undefined) {
        res.status(400).send("Sua Rua está undefined!");
    } else if (Cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (CEP == undefined) {
        res.status(400).send("Seu CEP está undefined!");
    } else if (Numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    }
    else {
        usuarioModel.EmpresaNewEndereco(Rua, Bairro, Cidade, CEP, Numero, Complemento, fkEmpresa)
            .then(function (resultado) {
                res.json(resultado);
            }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function EditarEnderecoEmpresa(req, res){
    var Rua = req.body.RuaServer;
    var Bairro = req.body.BairroServer;
    var Cidade = req.body.CidadeServer;
    var CEP = req.body.CEPServer;
    var Numero = req.body.NumeroServer;
    var Complemento = req.body.ComplementoServer;
    var fkEmpresa = req.params.fkEmpresa;
    if (Rua == undefined) {
        res.status(400).send("Sua Rua está undefined!");
    } else if (Cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (CEP == undefined) {
        res.status(400).send("Seu CEP está undefined!");
    } else if (Numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    }
    else{
        
        usuarioModel.EditarEnderecoEmpresa(Rua, Bairro, Cidade, CEP, Numero, Complemento, fkEmpresa)
        .then(function (resultado){
            res.json(resultado)
        }
        ).catch(
            function (erro){
                console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
            }
            
        )
    }
}
module.exports = {
    entrar,
    entrarFuncionario,
    cadastrar,
    cadastrarFuncionario,
    listar,
    testar,
    EmpresaNewEndereco,
    EditarEnderecoEmpresa
}