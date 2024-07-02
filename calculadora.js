function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias subtraindo as derrotas das vitórias
    let saldoVitorias = vitorias - derrotas;
    // Inicializa a variável que armazenará o nível do jogador
    let nivel = "";

    // Atribui o nível baseado no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna a mensagem com o saldo de vitórias e o nível do jogador
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função
console.log(calcularRank(30, 10)); // Substitua 30 por vitórias e 10 por derrotas para testar diferentes entradas