let canvas = document.getElementById('snake');
let context = canvas.getContext('2d'); // fala que o canvas vai rodar em 2d
let box = 32;

function criarBG(){
    context.fillStyle = 'lightgreen'; // altera a cor do retangulo
    context.fillRect(0 , 0, 16* box, 16 *box); //define os lados  x e y / largura e altura
}
criarBG();
