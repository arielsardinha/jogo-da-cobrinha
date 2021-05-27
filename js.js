let canvas = document.getElementById('snake');
let context = canvas.getContext('2d'); // fala que o canvas vai rodar em 2d
let box = 32;
let snake = [];
snake[0] = {x: 8 * box, y: 8 * box}; // tamanho da cobra
let direcao = 'right'; 

function criarBG(){ // criando mapa
    context.fillStyle = 'lightgreen'; // altera a cor do retangulo
    context.fillRect(0 , 0, 16 * box, 16 * box); //define os lados  x e y / largura e altura
}
function criarCobrinha(){ // criando cobrinha
    for(i = 0; i < snake.length; i++){
        context.fillStyle = 'red';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown', update); // faz evento de click
function update(event){
    // direcionando a cobra de acordo com a tecla digitada
    if(event.keyCode == 37 && direcao != 'right') direcao = 'left';
    if(event.keyCode == 38 && direcao != 'down') direcao = 'up';
    if(event.keyCode == 39 && direcao != 'left') direcao = 'right';
    if(event.keyCode == 40 && direcao != 'up') direcao = 'down';
}

function iniciarJogo(){ // iniciar jogo
    // faz a cobra atravessar a parede
    if(snake[0].x > 15 * box && direcao == 'right') snake[0].x = 0;
    if(snake[0].x < 0 && direcao == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direcao == 'down') snake[0].y = 0;
    if(snake[0].y < 0 && direcao == 'up') snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // cordenadas da cobrinha onde ela vai andar
    if(direcao == 'right') snakeX += box;
    if(direcao == 'left') snakeX -= box;
    if(direcao == 'up') snakeY -= box;
    if(direcao == 'down') snakeY += box;

    // coloca a cobrinha pra andar sozinha
    snake.pop();
    let newHead = {x: snakeX, y: snakeY}
    snake.unshift(newHead);
}
let jogo = setInterval(iniciarJogo, 100); // tempo para rodar o jogo 


