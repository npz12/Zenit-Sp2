var nome = '';
var email = '';
var tel = '';
var cnpj = '';
var senha = ''
var confirmarSenha = '';

function enviar() {
    var nome = iptNome.value;
    var email = iptEmail.value;
    var tel = iptTelefone.value;
    var cnpj = iptCNPJ.value;
    var senha = iptSenha.value;
    confirmarSenha = iptConfirmarSenha.value;

    var nomePreenchido = nome != '';
    var emailPreenchido = email != '';
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


    if (nomePreenchido && emailPreenchido && senhaPreenchido && confirmarSenhaPreenchido) {
        iptNome.style = 'border: 1px solid black;'
        iptEmail.style = 'border: 1px solid black;'
        iptSenha.style = 'border: 1px solid black;'
        iptConfirmarSenha.style = 'border: 1px solid black;'
        if (caractereEspecialNomeValido && emailValido && confirmacaoValida && tamanhoSenhaValido && caractereEspecialSenhaValido && numeroSenhaValido) {
            

            // span_erro_caractere_nome.style = 'color:black';
            // span_erro_caractere_especial_nome.style = 'color:black;'
            // span_erro_numero_nome.style = 'color:black;'
            // span_erro_caractere_senha.style = 'color:black;'
            // span_erro_caractere_especial_senha.style = 'color:black;'
            // span_erro_numero_senha.style = 'color:black;'
            tela_registro.style = 'display: none;';
            tela_sucesso.style = 'display: flex;';

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
