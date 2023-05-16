var nome = '';
var email = '';
var tel = '';
var cnpj = '';
var senha = ''
var confirmarSenha = '';
var emailRegistrado = '';
var senhaRegistrado = '';

function cadastrar() {
    var nome = iptNome.value;
    var email = iptEmail.value;
    var tel = iptTelefone.value;
    var cnpj = iptCNPJ.value;
    var senha = iptSenha.value;
    confirmarSenha = iptConfirmarSenha.value;

    var nomePreenchido = nome != '';
    var emailPreenchido = email != '';
    var telPreenchido = tel != '' && tel.length == 11;
    var cnpjPreenchido = cnpj != '' && cnpj.length == 14;
    var senhaPreenchido = senha != '';
    var confirmarSenhaPreenchido = confirmarSenha != '';

    var caractereEspecialNomeValido = !nome.includes('!') && !nome.includes('@') && !nome.includes('#') && !nome.includes('$') && !nome.includes('%') && !nome.includes('&') && !nome.includes('*') && !nome.includes('(') && !nome.includes(')') && !nome.includes('-') && !nome.includes('+') && !nome.includes('=') && !nome.includes('/') && !nome.includes('.') && !nome.includes(',');

    var emailValido = email.includes('@') && email.includes('.');

    // verifica se a confirmação é igual a senha
    var confirmacaoValida = senha == confirmarSenha;

    // verifica se o tamanho da senha é maior que 8 caracteres
    var tamanhoSenhaValido = senha.length >= 8;

    // verifica se a senha contem ao menos um caractere especial
    var caractereEspecialSenhaValido = senha.includes('!') || senha.includes('@') || senha.includes('#') || senha.includes('$') || senha.includes('%') || senha.includes('&') || senha.includes('*') || senha.includes('(') || senha.includes(')');

    // verifica se a senha contem ao menos um numero
    var numeroSenhaValido = senha.includes('0') || senha.includes('1') || senha.includes('2') || senha.includes('3') || senha.includes('4') || senha.includes('5') || senha.includes('6') || senha.includes('7') || senha.includes('8') || senha.includes('9');


    if (nomePreenchido && emailPreenchido && senhaPreenchido && confirmarSenhaPreenchido && telPreenchido && cnpjPreenchido) {
        iptNome.style = 'border: 1px solid black;';
        iptEmail.style = 'border: 1px solid black;';
        iptTelefone.style = 'border: 1px solid black;';
        iptCNPJ.style = 'border: 1px solid black;';
        iptSenha.style = 'border: 1px solid black;';
        iptConfirmarSenha.style = 'border: 1px solid black;';
        if (caractereEspecialNomeValido && emailValido && confirmacaoValida && tamanhoSenhaValido && caractereEspecialSenhaValido && numeroSenhaValido) {
            
            span_erro_caractere_especial_nome.style = 'border-color:black';
            span_erro_caractere_especial_nome.style = 'border-color:black;'
            span_erro_caractere_senha.style = 'border-color:black;'
            span_erro_caractere_especial_senha.style = 'border-color:black;'
            span_erro_numero_senha.style = 'border-color:black;'
            // tela_registro.style = 'display: none;';
            // tela_sucesso.style = 'display: flex;';
            alert('Cadastro da empresa realizado com sucesso! Entraremos em contato pelo email')
            // emailRegistrado = email;
            // senhaRegistrado = senha;

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
                alert('as senhas não são iguais')
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
            iptNome.style = 'border: 1px solid red;'
        } else{
            iptNome.style = 'border: 1px solid black;'
        }
        if (!emailPreenchido) {
            iptEmail.style = 'border: 1px solid red;'
        } else{
            iptEmail.style = 'border: 1px solid black;'
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
            iptSenha.style = 'border: 1px solid red;'
        } else{
            iptSenha.style = 'border: 1px solid black;'
        }
        if (!confirmarSenhaPreenchido) {
            iptConfirmarSenha.style = 'border: 1px solid red;'
        } else{
            iptConfirmarSenha.style = 'border: 1px solid black;'
        }
    }




    console.log(`Nome especial ${caractereEspecialNomeValido} email ${emailValido} confirmacao ${confirmacaoValida} tamanho senha ${tamanhoSenhaValido} especial ${caractereEspecialSenhaValido} numeros ${numeroSenhaValido}`)
}

function logar() {
    var senhaRegistradoValido = iptSenhaRegistrado.value;
    var emailRegistradoValido = iptEmailRegistrado.value;
    var emailValido1 = emailRegistradoValido.includes('@');
    var emailValido2 = emailRegistradoValido.includes('.');
    var tamanhoSenhaValido = senhaRegistradoValido.length >= 8;
    // verifica se a senha contem ao menos um caractere especial
    var caractereEspecialSenhaValido = senhaRegistradoValido.includes('!') || senhaRegistradoValido.includes('@') || senhaRegistradoValido.includes('#') || senhaRegistradoValido.includes('$') || senhaRegistradoValido.includes('%') || senhaRegistradoValido.includes('&') || senhaRegistradoValido.includes('*') || senhaRegistradoValido.includes('(') || senhaRegistradoValido.includes(')');

    // verifica se a senhaRegistradoValido contem ao menos um numero
    var numeroSenhaValido = senhaRegistradoValido.includes('0') || senhaRegistradoValido.includes('1') || senhaRegistradoValido.includes('2') || senhaRegistradoValido.includes('3') || senhaRegistradoValido.includes('4') || senhaRegistradoValido.includes('5') || senhaRegistradoValido.includes('6') || senhaRegistradoValido.includes('7') || senhaRegistradoValido.includes('8') || senhaRegistradoValido.includes('9');



    if (emailValido1 && emailValido2  && tamanhoSenhaValido  && caractereEspecialSenhaValido  && numeroSenhaValido ) {
        alert('logado com sucesso');
        window.open('login/main.html');
        window.close('login.html');
    } else {
        alert('Email ou senha incorreto')
    }
}