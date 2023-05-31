var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar/:idEmpresa", function (req, res) {
    avisoController.listar(req, res);
});
router.get("/listar/:idEmpresa/:emailFunc", function (req, res) {
    avisoController.listarPorFk(req, res);
});
router.get("/listarFuncionario/:idEmpresa", function (req, res) {
    avisoController.listarFuncionario(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idUsuario", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idFuncionario", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;