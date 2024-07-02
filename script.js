// Definição da classe Hero
class Hero {
    // Construtor da classe, chamado ao criar uma nova instância de Hero
    constructor(nome, idade, tipo) {
        this.nome = nome; // Nome do herói
        this.idade = idade; // Idade do herói
        this.tipo = tipo; // Tipo do herói (ex: mago, guerreiro, etc.)
    }

    // Método atacar, responsável por simular o ataque do herói
    atacar() {
        let ataque; // Variável para armazenar a descrição do ataque
        // Estrutura de decisão que define o ataque baseado no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia'; // Ataque específico para magos
                break;
            case 'guerreiro':
                ataque = 'usou espada'; // Ataque específico para guerreiros
                break;
            case 'monge':
                ataque = 'usou artes marciais'; // Ataque específico para monges
                break;
            case 'ninja':
                ataque = 'usou shuriken'; // Ataque específico para ninjas
                break;
            default:
                ataque = 'não identificado'; // Caso o tipo não seja reconhecido
        }
        // Exibe no console o tipo do herói e o ataque utilizado
        console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

// Criação de instâncias da classe Hero com diferentes tipos
let heroi1 = new Hero('Arthur', 30, 'guerreiro'); // Cria um herói do tipo guerreiro
heroi1.atacar(); // Chama o método atacar para o herói guerreiro

let heroi2 = new Hero('Merlin', 45, 'mago'); // Cria um herói do tipo mago
heroi2.atacar(); // Chama o método atacar para o herói mago