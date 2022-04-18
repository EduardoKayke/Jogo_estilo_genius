let order = [];
let clickedOrder = [];
let score = 0;

// 0 - Green
// 1 - Red
// 2 - Yellow
// 3 - Blue

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//Cria a ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    };
};

//Acende a próxima cor!
let lightColor = (element, number) => {
    number *= 500;

    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
};

//Checa se os botões clicados são os mesmos da ordem gerada no jogo.
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        };
    };
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}
        Você acertou!
        Iniciando próximo nível`);
        nextLevel();
    };
};

//Clique do jogador
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
};

// Retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    };
};

//Próximo nível do jogo
let nextLevel = () =>{
    score++;
    shuffleOrder();
};

//Game Over
let gameOver = () => {
    alert(`Pontuação: ${score}
    Você perdeu o jogo
    Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
};

//Iniciar jogo
let playGame = () => {
    alert(`Bem vindo ao Genius
    Iniciando novo jogo`)
    score = 0;

    nextLevel();
};

// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();