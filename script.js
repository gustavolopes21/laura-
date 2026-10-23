
const botaoCarta = document.getElementById("botaoCarta");
const carta = document.getElementById("carta");

const botaoSurpresa = document.getElementById("botaoSurpresa");
const mensagemSecreta = document.getElementById("mensagemSecreta");

const areaCoracoes = document.getElementById("coracoes");

// Abrir a carta
botaoCarta.addEventListener("click", function () {
    carta.classList.remove("escondida");

    botaoCarta.textContent = "Carta aberta ❤️";
    botaoCarta.disabled = true;
});

// Mensagem secreta
const declaracao = "Eu não sei exatamente o que o futuro reserva pra gente, mas sei que você se tornou alguém muito especial pra mim. ❤️";

botaoSurpresa.addEventListener("click", function () {
    mensagemSecreta.classList.remove("escondida");

    botaoSurpresa.textContent = "Com carinho, para você ❤️";
    botaoSurpresa.disabled = true;

    let letra = 0;

    function escrever() {
        if (letra < declaracao.length) {
            mensagemSecreta.textContent += declaracao.charAt(letra);
            letra++;

            setTimeout(escrever, 45);
        }
    }

    escrever();
});

// Corações flutuantes
function criarCoracao() {
    const coracao = document.createElement("span");

    coracao.textContent = "♥";
    coracao.style.position = "absolute";
    coracao.style.left = Math.random() * 100 + "%";
    coracao.style.bottom = "-30px";
    coracao.style.color = "#ff4fa3";
    coracao.style.fontSize = (15 + Math.random() * 20) + "px";
    coracao.style.opacity = "0.8";
    coracao.style.animation = "flutuar 6s linear forwards";

    areaCoracoes.appendChild(coracao);

    setTimeout(function () {
        coracao.remove();
    }, 6000);
}

// Criar um coração a cada meio segundo
setInterval(criarCoracao, 500);
