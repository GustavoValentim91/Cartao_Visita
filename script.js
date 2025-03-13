// Objeto com os links dos botões
const links = {
    link1: "https://pay.kiwify.com.br/SsypuCD",
    link2: "https://pay.kiwify.com.br/r5VAvbP",
    link3: "https://pay.kiwify.com.br/TIVrkrz"
};

// Objeto para armazenar o número de cliques
const clickCounts = {
    link1: 0,
    link2: 0,
    link3: 0
};

// Aguarda o carregamento do DOM para adicionar os eventos
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("nav.links button").forEach(button => {
        button.addEventListener("click", function() {
            const linkKey = this.getAttribute("data-link"); // Obtém o valor do atributo data-link
            
            if (links[linkKey]) {
                window.open(links[linkKey], "_blank"); // Abre o link em nova aba
                
                // Rastreia os cliques
                clickCounts[linkKey]++;
                console.log(`Botão "${this.innerText}" foi clicado ${clickCounts[linkKey]} vezes.`);
            } else {
                console.warn('Link não configurado:', linkKey);
            }
        });
    });
});
