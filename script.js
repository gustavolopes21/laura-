
const botaoCarta = document.getElementById("botaoCarta");
const botaoContador = document.getElementById("botaoContador");
const botaoVoltar = document.getElementById("botaoVoltar");

const carta = document.getElementById("carta");
const contador = document.getElementById("contador");
const areaCoracoes = document.getElementById("coracoes");

// Abrir a carta
botaoCarta.addEventListener("click", function () {
    carta.classList.remove("escondida");

    botaoCarta.textContent = "Carta aberta ❤️";
    botaoCarta.disabled = true;

    carta.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Mostrar o contador
botaoContador.addEventListener("click", function () {
    contador.classList.remove("escondida");

    atualizarContador();

    contador.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Voltar ao início
botaoVoltar.addEventListener("click", function () {
    carta.classList.add("escondida");
    contador.classList.add("escondida");

    botaoCarta.textContent = "Abrir minha carta 💌";
    botaoCarta.disabled = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contador desde 22 de julho de 2026
function atualizarContador() {
    const dataEspecial = new Date(2026, 6, 22, 0, 0, 0);
    const agora = new Date();

    let diferenca = agora.getTime() - dataEspecial.getTime();

    if (diferenca < 0) {
        diferenca = 0;
    }

    const totalSegundos = Math.floor(diferenca / 1000);

    const dias = Math.floor(totalSegundos / 86400);
    const horas = Math.floor((totalSegundos % 86400) / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

// Atualizar o contador a cada segundo
atualizarContador();
setInterval(atualizarContador, 1000);

// Criar corações flutuantes
function criarCoracao() {
    if (!areaCoracoes) return;

    const coracao = document.createElement("span");

    coracao.classList.add("coracao");
    coracao.textContent = "♥";

    coracao.style.left = Math.random() * 100 + "%";
    coracao.style.fontSize = (15 + Math.random() * 20) + "px";
    coracao.style.animationDuration = (5 + Math.random() * 4) + "s";

    areaCoracoes.appendChild(coracao);

    setTimeout(function () {
        coracao.remove();
    }, 9000);
}

// Criar um coração a cada 700 milissegundos
setInterval(criarCoracao, 700);
