// Função que redireciona para o cliente de email padrão
function sendEmail() {
    window.location.href = "mailto:marcosvitorlima531@gmail.com";
}

// Adiciona um evento de clique ao botão para chamar a função sendEmail
document.getElementById("emailButton").addEventListener("click", sendEmail);