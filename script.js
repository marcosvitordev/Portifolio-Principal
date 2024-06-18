// Função que redireciona para o cliente de email padrão
function sendEmail() {
    window.location.href = "mailto:marcosvitorlima531@gmail.com";
}

// Adiciona um evento de clique ao botão para chamar a função sendEmail
document.getElementById("emailButton").addEventListener("click", sendEmail);


document.getElementById('curriculoDL').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'assets/Curriculo_Marcos-Vitor.pdf';  // Substitua pelo caminho do seu arquivo PDF
    link.download = 'Curriculo_Marcos-Vitor.pdf';  // Nome do arquivo que será baixado
    link.click();
});

function downloadPDF() {
    console.log("certo")
    const link = document.createElement('a');
    link.href = 'assets/Curriculo_Marcos-Vitor.pdf';  // Substitua pelo caminho do seu arquivo PDF
    link.download = 'Curriculo_Marcos-Vitor.pdf';  // Nome do arquivo que será baixado
    link.click();
}

function abrirSite(url) {
    window.open(url, '_blank');
}