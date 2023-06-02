var database = require("../database/config");

var limites = {
    muito_quente: 100,
    quente: 80,
    ideal: 60,
    frio: 45,
    muito_frio: 20
};

function buscarUltimasMedidas(idTransformador, limite_linhas, fkEmpresa) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        lm35 as temperatura, 
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_transformador = ${idTransformador}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        lm35 as temperatura, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    join transformador
                    where fk_transformador = ${idTransformador} and fkEmpresa = ${fkEmpresa}
                    order by medida.id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idTransformador, fkEmpresa) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        lm35 as temperatura,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_transformador 
                        from medida where fk_transformador = ${idTransformador} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        lm35 as temperatura,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_transformador 
                        from medida 
                        join transformador
                        where fk_transformador = ${idTransformador} and fkEmpresa = ${fkEmpresa}
                    order by medida.id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
