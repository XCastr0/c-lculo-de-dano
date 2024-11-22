// Manipula o upload da imagem do primeiro personagem
document.getElementById("upload1").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("character1").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Manipula o upload da imagem do segundo personagem
document.getElementById("upload2").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("character2").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Calcula o dano baseado nas regras
document.getElementById("calcular-dano").addEventListener("click", function () {
    // Obter valores dos campos
    const nomePers1 = document.getElementById("nome-pers1").value;
    const ataqPrimeiroPers = parseFloat(document.getElementById("ataque-pers1").value);
    const nomePers2 = document.getElementById("nome-pers2").value;
    const pontosVida = parseFloat(document.getElementById("vida-pers2").value);
    const poderDefesa = parseFloat(document.getElementById("defesa-pers2").value);
    const escudo = document.getElementById("escudo-pers2").value;

    // Validar entradas
    if (
        !nomePers1 ||
        isNaN(ataqPrimeiroPers) ||
        !nomePers2 ||
        isNaN(pontosVida) ||
        isNaN(poderDefesa)
    ) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Calcular dano
    let danoCausado = 0;
    if (ataqPrimeiroPers > poderDefesa && escudo === "não") {
        danoCausado = ataqPrimeiroPers - poderDefesa;
    } else if (ataqPrimeiroPers > poderDefesa && escudo === "sim") {
        danoCausado = (ataqPrimeiroPers - poderDefesa) / 2;
    }

    // Calcular vida restante
    const vidaRestante = Math.max(pontosVida - danoCausado, 0); // Evitar valores negativos

    // Exibir resultado no HTML
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <h3>Resultado do Cálculo</h3>
        <p><strong>${nomePers1}</strong> causou <strong>${danoCausado}</strong> de dano a <strong>${nomePers2}</strong>.</p>
        <p>Pontos de vida restantes de <strong>${nomePers2}</strong>: <strong>${vidaRestante}</strong>.</p>
        <p><strong>${nomePers2}</strong> tinha inicialmente <strong>${pontosVida}</strong> pontos de vida, <strong>${poderDefesa}</strong> de defesa e ${
        escudo === "sim" ? "possuía" : "não possuía"
    } escudo.</p>
    `;
});
