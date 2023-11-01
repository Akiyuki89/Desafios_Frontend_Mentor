/*Validando e-mail e redirecionando página*/

function validarEmail() {
    const email = document.getElementById('email').value;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regex.test(email)) {
        alert("E-mail inválido");
        document.getElementById('email').focus();
        return false;
    }
    enviarEmail();
    return true;
}

/*Função para capturar e-mail digitado*/

function enviarEmail() {
    const email = document.getElementById('email').value;
    localStorage.setItem('email', email); // Armazena o email no localStorage
    window.open('sucess.html', '_blank'); // Abre o segundo arquivo em uma nova guia ou janela
}

/*Função para mostrar o e-mail capturado */

document.addEventListener('DOMContentLoaded', function() {
    const email = localStorage.getItem('email'); // Lê o email do localStorage
    const emailSpan = document.getElementById('emailPlaceholder');
    if (email) {
        emailSpan.textContent = email; // Define o email no campo de destino
    }
});

/*Alterando e-mail*/

const emailInput = document.getElementById('email');

emailInput.addEventListener("input", function() {
    const emailSpan = document.getElementById("emailPlaceholder");
    emailSpan.textContent = emailInput.value;
});


/*Fechando aba do navegador*/

function closeWindow(){
    window.close();
}