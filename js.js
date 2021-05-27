let canvas = document.getElementById('snake');
let context = canvas.getContext('2d'); // fala que o canvas vai rodar em 2d
let box = 32;
let snake = [];
snake[0] = {x: 8 * box, y: 8 * box}; // tamanho da cobra
let direcao = 'right'; 

function criarBG(){
    context.fillStyle = 'lightgreen'; // altera a cor do retangulo
    context.fillRect(0 , 0, 16 * box, 16 * box); //define os lados  x e y / largura e altura
}
function criarCobrinha(){ // criando cobrinha
    for(i = 0; i < snake.length; i++){
        context.fillStyle = 'red';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // cordenadas da cobrinha onde ela vai andar
    if(direcao == 'right') snakeX += box;
    if(direcao == 'left') snakeY -= box;
    if(direcao == 'up') snakeY -= box;
    if(direcao == 'down') snakeX += box;

    // coloca a cobrinha pra andar sozinha
    snake.pop();
    let newHead = {x: snakeX, y: snakeY}
    snake.unshift(newHead);

    
}
let jogo = setInterval(iniciarJogo, 100); // tempo para rodar o jogo 


