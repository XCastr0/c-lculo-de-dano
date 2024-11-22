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

// Manipula o upload da segunda imagem
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

const nomePers1 = prompt("Digite o nome do primeiro personagem");
const ataqPrimeiroPers = parseFloat(prompt("Digite o poder de ataque do primeiro personagem"));
const nomePers2 = prompt("Digite o nome do segundo personagem");
const pontosVida = parseFloat(prompt("Digite a quantidade de pontos de vida do segundo personagem"));
const poderDefesa = parseFloat(prompt("Digite o poder de defesa do segundo personagem"));
const escudo = prompt("Ele possui escudo? responda apenas com sim ou não");

if (ataqPrimeiroPers>poderDefesa && escudo==="não" ) {
    const danoCausado = ataqPrimeiroPers - poderDefesa
    alert("o dano causado é " + danoCausado)
  } else if (ataqPrimeiroPers>poderDefesa && escudo==="sim"){
    danoCausado = (ataqPrimeiroPers-poderDefesa)/2
    alert("o dano causado é " + danoCausado)
  } else if (ataqPrimeiroPers<=poderDefesa){
    danoCausado = 0
    alert("o dano causado é " + danoCausado)
  }
const resultado =    pontosVida -danoCausado

alert(
    "O valor de vida do segundo personagem é " + resultado + "\n\n" +
    "O dano causado foi " + danoCausado + "\n\n" +
    "A quantidade de pontos de vida foi " + pontosVida + "\n\n" +
    "O valor de defesa foi " + poderDefesa + "\n\n" +
    "O valor do escudo foi " + escudo
  );