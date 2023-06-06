// var nome = '';
// var email = '';
// var tel = '';
// var cnpj = '';
// var senha = ''
// var confirmarSenha = '';
// var emailRegistrado = '';
// var senhaRegistrado = '';

function cadastrar() {
    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var telVar = iptTelefone.value;
    var cnpjVar = iptCNPJ.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;

    var nomePreenchido = nomeVar != '';
    var emailPreenchido = emailVar != '';
    var telPreenchido = telVar != '' && telVar.length == 11;
    var cnpjPreenchido = cnpjVar != '' && cnpjVar.length == 14;
    var senhaPreenchido = senhaVar != '';
    var confirmarSenhaPreenchido = confirmacaoSenhaVar != '';

    var caractereEspecialNomeValido = !nomeVar.includes('!') && !nomeVar.includes('@') && !nomeVar.includes('#') && !nomeVar.includes('$') && !nomeVar.includes('%') && !nomeVar.includes('&') && !nomeVar.includes('*') && !nomeVar.includes('(') && !nomeVar.includes(')') && !nomeVar.includes('-') && !nomeVar.includes('+') && !nomeVar.includes('=') && !nomeVar.includes('/') && !nomeVar.includes('.') && !nomeVar.includes(',');

    var emailValido = emailVar.includes('@') && emailVar.includes('.');

    // verifica se a confirmação é igual a senha
    var confirmacaoValida = senhaVar == confirmacaoSenhaVar;

    // verifica se o tamanho da senha é maior que 8 caracteres
    var tamanhoSenhaValido = senhaVar.length >= 8;

    // verifica se a senha contem ao menos um caractere especial
    var caractereEspecialSenhaValido = senhaVar.includes('!') || senhaVar.includes('@') || senhaVar.includes('#') || senhaVar.includes('$') || senhaVar.includes('%') || senhaVar.includes('&') || senhaVar.includes('*') || senhaVar.includes('(') || senhaVar.includes(')');

    // verifica se a senha contem ao menos um numero
    var numeroSenhaValido = senhaVar.includes('0') || senhaVar.includes('1') || senhaVar.includes('2') || senhaVar.includes('3') || senhaVar.includes('4') || senhaVar.includes('5') || senhaVar.includes('6') || senhaVar.includes('7') || senhaVar.includes('8') || senhaVar.includes('9');


    if (nomePreenchido && emailPreenchido && senhaPreenchido && confirmarSenhaPreenchido && telPreenchido && cnpjPreenchido) {
        nome_input.style = 'border: 1px solid black;';
        email_input.style = 'border: 1px solid black;';
        iptTelefone.style = 'border: 1px solid black;';
        iptCNPJ.style = 'border: 1px solid black;';
        senha_input.style = 'border: 1px solid black;';
        confirmacao_senha_input.style = 'border: 1px solid black;';
        if (caractereEspecialNomeValido && emailValido && confirmacaoValida && tamanhoSenhaValido && caractereEspecialSenhaValido && numeroSenhaValido) {
            
            span_erro_caractere_especial_nome.style = 'border-color:black';
            span_erro_caractere_especial_nome.style = 'border-color:black;'
            span_erro_caractere_senha.style = 'border-color:black;'
            span_erro_caractere_especial_senha.style = 'border-color:black;'
            span_erro_numero_senha.style = 'border-color:black;'
            // tela_registro.style = 'display: none;';
            // tela_sucesso.style = 'display: flex;';
            // emailRegistrado = email;
            // senhaRegistrado = senha;
                        // Enviando o valor da nova input
                        fetch("/usuarios/cadastrar", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                // crie um atributo que recebe o valor recuperado aqui
                                // Agora vá para o arquivo routes/usuario.js
                                nomeServer: nomeVar,
                                emailServer: emailVar,
                                telServer: telVar,
                                cnpjServer: cnpjVar,
                                senhaServer: senhaVar
                            })
                        }).then(function (resposta) {
                
                            console.log("resposta: ", resposta);
                
                            if (resposta.ok) {
                                cardErro.style.display = "block";
                
                                mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
                
                                setTimeout(() => {
                                    window.location = "login.html";
                                }, "2000")
                
                                // limparFormulario();
                                // finalizarAguardar();
                            } else {
                                throw ("Houve um erro ao tentar realizar o cadastro!");
                            }
                        }).catch(function (resposta) {
                            console.log(`#ERRO: ${resposta}`);
                            // finalizarAguardar();
                        });
                
                        return false;


        } else {
            
            if (!caractereEspecialNomeValido) {
                span_erro_caractere_especial_nome.style = 'color:red;'
            } else {
                span_erro_caractere_especial_nome.style = 'color:black;'
            }
            
            if (!emailValido) {
                alert('email invalido')
            }
            if (!confirmacaoValida) {
                alert('A confirmação de senha não está igual a senha!')
            }
            if (!tamanhoSenhaValido) {
                span_erro_caractere_senha.style = 'color:red;'
            } else {
                span_erro_caractere_senha.style = 'color:black;'

            }
            if (!caractereEspecialSenhaValido) {
                span_erro_caractere_especial_senha.style = 'color:red;'
            } else {
                span_erro_caractere_especial_senha.style = 'color:black;'

            }
            if (!numeroSenhaValido) {
                span_erro_numero_senha.style = 'color:red;'
            } else {
                span_erro_numero_senha.style = 'color:black;'
            }
        }
    } else {
        alert('Informe todos os campos!')
        if (!nomePreenchido) {
            nome_input.style = 'border: 1px solid red;'
        } else{
            nome_input.style = 'border: 1px solid black;'
        }
        if (!emailPreenchido) {
            email_input.style = 'border: 1px solid red;'
        } else{
            email_input.style = 'border: 1px solid black;'
        }
        if (!telPreenchido) {
            iptTelefone.style = 'border: 1px solid red;'
        } else{
            iptTelefone.style = 'border: 1px solid black;'
        }
        if (!cnpjPreenchido) {
            iptCNPJ.style = 'border: 1px solid red;'
        } else{
            iptCNPJ.style = 'border: 1px solid black;'
        }
        if (!senhaPreenchido) {
            senha_input.style = 'border: 1px solid red;'
        } else{
            senha_input.style = 'border: 1px solid black;'
        }
        if (!confirmarSenhaPreenchido) {
            confirmacao_senha_input.style = 'border: 1px solid red;'
        } else{
            confirmacao_senha_input.style = 'border: 1px solid black;'
        }
    }

}

function entrar() {


    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    sessionStorage.SALVAR_EMAIL = emailVar;
    var checkbox = checkBoxFuncionario.checked

    if (emailVar == "" || senhaVar == "") {
        senha_input.style = 'border: 1px solid red;'
        email_input.style = 'border: 1px solid red;'
        console.log('Preencha todos os campos!')
        return false;
    }
    else {
        senha_input.style = 'border: 1px solid black;'
        email_input.style = 'border: 1px solid black;'
    }
    if (checkbox == true) {
        sessionStorage.FUNCIONARIO_PERMISSAO = 1;
        console.log('verificado')
        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/autenticarFuncionario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailFuncServer: emailVar,
                senhaFuncServer: senhaVar
            })
        }).then(function (resposta) {
            // console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);
                senha_input.style = 'border: 1px solid black;'
                email_input.style = 'border: 1px solid black;'

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.ID_EMPRESA = json.fkEmpresa;



                    setTimeout(function () {
                        window.location = "/login/main.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");
                alert('Email ou senha incorretos!');
                senha_input.style = 'border: 1px solid red;'
                email_input.style = 'border: 1px solid red;'

                resposta.text().then(texto => {
                    console.error(texto);

                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    } else {
        sessionStorage.FUNCIONARIO_PERMISSAO = 2;
        console.log('nao foi verificado')


        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);
                senha_input.style = 'border: 1px solid black;'
                email_input.style = 'border: 1px solid black;'

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.ID_EMPRESA = json.idEmpresa;



                    setTimeout(function () {
                        window.location = "/login/main.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");
                alert('Email ou senha incorretos!');
                senha_input.style = 'border: 1px solid red;'
                email_input.style = 'border: 1px solid red;'

                resposta.text().then(texto => {
                    console.error(texto);

                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }
}
