var nome = '';
var email = '';
var senha = '';
var confirmarSenha = '';

function enviar() {
    nome = ipt_nome.value;
    email = ipt_email.value;
    senha = ipt_senha.value;
    confirmarSenha = ipt_confirmar_senha.value;

    var nomePreenchido = nome != '';
    var emailPreenchido = email != '';
    var senhaPreenchido = senha != '';
    var confirmarSenhaPreenchido = confirmarSenha != '';


    var numeroNomeValido = !nome.includes('1') && !nome.includes('2') && !nome.includes('3') && !nome.includes('4') && !nome.includes('5') && !nome.includes('6') && !nome.includes('7') && !nome.includes('8') && !nome.includes('9') && !nome.includes('0');

    var caractereEspecialNomeValido = !nome.includes('!') && !nome.includes('@') && !nome.includes('#') && !nome.includes('$') && !nome.includes('%') && !nome.includes('&') && !nome.includes('*') && !nome.includes('(') && !nome.includes(')') && !nome.includes('-') && !nome.includes('+') && !nome.includes('=') && !nome.includes('/') && !nome.includes('.') && !nome.includes(',');

    var tamanhoNomeValido = nome.length >= 3;

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
        ipt_nome.style = 'border: 1px solid black;'
        ipt_email.style = 'border: 1px solid black;'
        ipt_senha.style = 'border: 1px solid black;'
        ipt_confirmar_senha.style = 'border: 1px solid black;'
        if (tamanhoNomeValido && caractereEspecialNomeValido && numeroNomeValido && emailValido && confirmacaoValida && tamanhoSenhaValido && caractereEspecialSenhaValido && numeroSenhaValido) {
            

            // span_erro_caractere_nome.style = 'color:black';
            // span_erro_caractere_especial_nome.style = 'color:black;'
            // span_erro_numero_nome.style = 'color:black;'
            // span_erro_caractere_senha.style = 'color:black;'
            // span_erro_caractere_especial_senha.style = 'color:black;'
            // span_erro_numero_senha.style = 'color:black;'
            tela_registro.style = 'display: none;';
            tela_sucesso.style = 'display: flex;';

        } else {
            
            if (!tamanhoNomeValido) {
                span_erro_caractere_nome.style = 'color:red'
            } else{
                span_erro_caractere_nome.style = 'color:black'
            }
            if (!caractereEspecialNomeValido) {
                span_erro_caractere_especial_nome.style = 'color:red;'
            } else {
                span_erro_caractere_especial_nome.style = 'color:black;'

            }
            if (!numeroNomeValido) {
                span_erro_numero_nome.style = 'color:red;'
            } else {
                span_erro_numero_nome.style = 'color:black;'

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
            ipt_nome.style = 'border: 1px solid red;'
        } else{
            ipt_nome.style = 'border: 1px solid black;'
        }
        if (!emailPreenchido) {
            ipt_email.style = 'border: 1px solid red;'
        } else{
            ipt_email.style = 'border: 1px solid black;'
        }
        if (!senhaPreenchido) {
            ipt_senha.style = 'border: 1px solid red;'
        } else{
            ipt_senha.style = 'border: 1px solid black;'
        }
        if (!confirmarSenhaPreenchido) {
            ipt_confirmar_senha.style = 'border: 1px solid red;'
        } else{
            ipt_confirmar_senha.style = 'border: 1px solid black;'
        }
    }




    console.log(`Nome numero ${numeroNomeValido} Nome especial ${caractereEspecialNomeValido} tamanho nome${tamanhoNomeValido} email ${emailValido} confirmacao ${confirmacaoValida} tamanho senha ${tamanhoSenhaValido} especial ${caractereEspecialSenhaValido} numeros ${numeroSenhaValido}`)
}
