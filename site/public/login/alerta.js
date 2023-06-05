var alertas = [];
function obterdados(idTransformador) {
    fetch(`/medidas/tempo-real/${idTransformador}/${fkEmpresa}`)
        .then(resposta => {
            if (resposta.ok) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idTransformador);
                });
            } else {

                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, idTransformador) {
    var temp = resposta[0].temperatura;
    console.log('alertando')

    console.log(idTransformador === resposta[0].fk_transformador)
    
    var grauDeAviso ='';


    var limites = {
        muito_quente: 100,
        quente: 80,
        ideal: 60,
        frio: 45,
        muito_frio: 20
    };

    var classe_temperatura = 'cor-alerta';

    if (temp >= limites.muito_quente) {
        classe_temperatura = 'cor-alerta perigo-quente';
        grauDeAviso = 'perigo quente'
        grauDeAvisoCor = 'cor-alerta perigo-quente'
        // exibirAlerta(temp, idTransformador, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.muito_quente && temp >= limites.quente) {
        classe_temperatura = 'cor-alerta alerta-quente';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta alerta-quente'
        // exibirAlerta(temp, idTransformador, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.quente && temp > limites.frio) {
        classe_temperatura = 'cor-alerta ideal';
        removerAlerta(idTransformador);
    }
    else if (temp <= limites.frio && temp > limites.muito_frio) {
        classe_temperatura = 'cor-alerta alerta-frio';
        grauDeAviso = 'alerta frio'
        grauDeAvisoCor = 'cor-alerta alerta-frio'
        // exibirAlerta(temp, idTransformador, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.muito_frio) {
        classe_temperatura = 'cor-alerta perigo-frio';
        grauDeAviso = 'perigo frio'
        grauDeAvisoCor = 'cor-alerta perigo-frio'
        // exibirAlerta(temp, idTransformador, grauDeAviso, grauDeAvisoCor)
    }


    var card;

    if (idTransformador == 1) {
        temp_transf_1.innerHTML = temp + "°C";
        if (temp >= limites.muito_quente) {
            temp_transf_1.style = 'color: red;'
        }
        else if (temp < limites.muito_quente && temp >= limites.quente) {
            temp_transf_1.style = 'background-color: yellow;'
        }
        else if (temp < limites.quente && temp > limites.frio) {
            temp_transf_1.style = 'color: green;'
        }
        else if (temp <= limites.frio && temp > limites.muito_frio) {
            temp_transf_1.style = 'background-color: yellow;'
        }
        else if (temp <= limites.muito_frio) {
            temp_transf_1.style = 'color: red;'
        }
        card = card_1
    } else if (idTransformador == 2) {
        temp_transf_2.innerHTML = temp + "°C";
        card = card_2
    } else if (idTransformador == 3) {
        temp_transf_3.innerHTML = temp + "°C";
        card = card_3
    } else if (idTransformador == 4) {
        temp_transf_4.innerHTML = temp + "°C";
        card = card_4
    }

    card.className = classe_temperatura;
}

// function exibirAlerta(temp, idTransformador, grauDeAviso, grauDeAvisoCor) {
//     var indice = alertas.findIndex(item => item.idTransformador == idTransformador);

//     if (indice >= 0) {
//         alertas[indice] = { idTransformador, temp, grauDeAviso, grauDeAvisoCor }
//     } else {
//         alertas.push({ idTransformador, temp, grauDeAviso, grauDeAvisoCor });
//     }

//     exibirCards();
    
// // Dentro da div com classe grauDeAvisoCor há um caractere "invisível", 
// // que pode ser inserido clicando com o seu teclado em alt+255 ou pelo código adicionado acima.
// }

// function removerAlerta(idTransformador) {
//     alertas = alertas.filter(item => item.idTransformador != idTransformador);
//     exibirCards();
// }
 
// function exibirCards() {
//     alerta.innerHTML = '';

//     for (var i = 0; i < alertas.length; i++) {
//         var mensagem = alertas[i];
//         alerta.innerHTML += transformarEmDiv(mensagem);
//     }
// }

// function transformarEmDiv({ idTransformador, temp, grauDeAviso, grauDeAvisoCor }) {
//     return `<div class="mensagem-alarme">
//     <div class="informacao">
//     <div class="${grauDeAvisoCor}">&#12644;</div> 
//      <h3>Aquário ${idTransformador} está em estado de ${grauDeAviso}!</h3>
//     <small>Temperatura ${temp}.</small>   
//     </div>
//     <div class="alarme-sino"></div>
//     </div>`;
// }
