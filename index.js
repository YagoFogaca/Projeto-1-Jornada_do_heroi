// trocar a historia para a do sanduichi do chaves
const prompt = require('prompt-sync')();
console.clear();
let sim = 0;
let nao = 0;
console.log(
    'Um astronauta foi escalado para uma missão, essa missão vai definir o futuro da humanidade. A missão consiste em destruir um asteroide que está vindo a toda velocidade em direção a terra. Pode ser que ele se torne o último ser humano vivo.',
);
let pergunta1 = prompt('Chegou ao espaço? ').toLowerCase();
while (pergunta1 != 'sim' && pergunta1 != 'nao') {
    pergunta1 = prompt('Chegou ao espaço? ').toLowerCase();
}
let pergunta2 = prompt('Armas carregadas? ').toLowerCase();
while (pergunta2 != 'sim' && pergunta2 != 'nao') {
    pergunta2 = prompt('Armas carregadas? ').toLowerCase();
}
let pergunta3 = prompt('Ligou as miras? ').toLowerCase();
while (pergunta3 != 'sim' && pergunta3 != 'nao') {
    pergunta3 = prompt('Ligou as miras? ').toLowerCase();
}
let pergunta4 = prompt('Alinhou as miras? ').toLowerCase();
while (pergunta4 != 'sim' && pergunta4 != 'nao') {
    pergunta4 = prompt('Alinhou as miras? ').toLowerCase();
}
let pergunta5 = prompt('Asteroide destruido? ').toLowerCase();
while (pergunta5 != 'sim' && pergunta5 != 'nao') {
    pergunta5 = prompt('Asteroide destruido? ').toLowerCase();
}
const respostas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];
console.log(respostas);
for (let i = 0; i < respostas.length; i++) {
    if (respostas[i] == 'sim') {
        sim++;
    } else if (respostas[i] == 'nao') {
        nao++;
    }
}
if (sim === 5) {
    console.log(
        'Você salvou a humanidade e seus feitos serão lembrados por muitas gerações.',
    );
} else if (sim === 4) {
    console.log(
        'Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.',
    );
} else if (sim === 3) {
    console.log('Você falha, mas ainda consegue salvar a humanidade.');
} else if (sim === 1 || sim === 2) {
    console.log(
        'Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco e a humanidade será extinta.',
    );
} else {
    console.log('Você falha miseravelmente e toda a humanidade será extinta.');
}
