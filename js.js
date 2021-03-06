let canvas = document.getElementById('snake');
let texto = document.getElementById('texto')
let context = canvas.getContext('2d'); // fala que o canvas vai rodar em 2d
let box = 32;
let snake = [];
snake[0] = {x: 8 * box, y: 8 * box}; // tamanho da cobra
let direcao = 'right'; 

// criando a comida em locais aleatorios 
//.floor ele retira o valor flutuante
// o random ele cria numeros aleatorios
let food = {
                x: Math.floor(Math.random() * 15 + 1 ) * box,
                y: Math.floor(Math.random() * 15 + 1 ) * box
            } 

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
function drawFood(){ // criando a comida
    context.fillStyle = 'black';
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update); // faz evento de click
function update(event){
    // direcionando a cobra de acordo com a tecla digitada
    if(event.keyCode == 37 && direcao != 'right') direcao = 'left';
    if(event.keyCode == 38 && direcao != 'down') direcao = 'up';
    if(event.keyCode == 39 && direcao != 'left') direcao = 'right';
    if(event.keyCode == 40 && direcao != 'up') direcao = 'down';
}

function iniciarJogo(){ // iniciar jogo e finalizar o jogo
    texto.style.display = 'none';
    for(i = 1; i < snake.length; i ++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            texto.style.display = 'block';
            alert('game over :/');
        }
    }

    // faz a cobra atravessar a parede
    if(snake[0].x > 15 * box && direcao == 'right') snake[0].x = 0;
    if(snake[0].x < 0 && direcao == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direcao == 'down') snake[0].y = 0;
    if(snake[0].y < 0 && direcao == 'up') snake[0].y = 16 * box;

    // inicializa conteudos
    criarBG();
    criarCobrinha();
    drawFood()

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // cordenadas da cobrinha onde ela vai andar
    if(direcao == 'right') snakeX += box;
    if(direcao == 'left') snakeX -= box;
    if(direcao == 'up') snakeY -= box;
    if(direcao == 'down') snakeY += box;

    // colisao com a comida e colocando em novo local aleatorio
    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 + 1 ) * box;
        food.y = Math.floor(Math.random() * 15 + 1 ) * box;
    }

    // coloca a cobrinha pra andar sozinha
    let newHead = {x: snakeX, y: snakeY}
    snake.unshift(newHead);
}
let jogo = setInterval(iniciarJogo, 100); // tempo para rodar o jogo 


