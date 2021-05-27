let canvas = document.getElementById('snake');
let context = canvas.getContext('2d'); // fala que o canvas vai rodar em 2d
let box = 32;
let snake = [];
snake[0] = {x: 8 * box, y: 8 * box}; // tamanho da cobra

function criarBG(){
    context.fillStyle = 'lightgreen'; // altera a cor do retangulo
    context.fillRect(0 , 0, 16 * box, 16 * box); //define os lados  x e y / largura e altura
}
function criarCobrinha(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = 'red';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
criarBG();
criarCobrinha();
