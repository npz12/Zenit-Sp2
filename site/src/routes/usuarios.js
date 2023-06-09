var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
router.post("/cadastrarFuncionario", function (req, res) {
    usuarioController.cadastrarFuncionario(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
router.post("/autenticarFuncionario", function (req, res) {
    usuarioController.entrarFuncionario(req, res);
});

router.post("/EmpresaNewEndereco", function (req, res) {
    usuarioController.EmpresaNewEndereco(req, res);
});

router.post("/EditarEnderecoEmpresa/:fkEmpresa", function(req, res){
    usuarioController.EditarEnderecoEmpresa(req,res);
});
module.exports = router;