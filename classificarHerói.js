// Declaração de variáveis para armazenar o nome e a experiência (XP) do herói
let nomeHeroi = "Arthur";
let xpHeroi = 4500; // Exemplo de quantidade de experiência

// Declaração de variável para armazenar o nível do herói baseado na sua experiência
let nivelHeroi;

// Estrutura de decisão para classificar o nível do herói baseado na sua experiência
if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Exibição da mensagem final com o nome e o nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);