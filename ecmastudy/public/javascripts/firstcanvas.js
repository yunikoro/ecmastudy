/**
 * Created by yunikori on 2017/3/16.
 */
console.log('hello canvas');

var canvas = document.getElementById('fstcanvas');
var para = document.querySelector('p');
var ctx = canvas.getContext('2d');
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var edit = document.getElementById('edit');
var code = textarea.value;


function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    eval(textarea.value);
    para.textContent = 'The rectangle is ' + x + 'px wide and' + y + 'px high';
}

reset.addEventListener('click', function() {
    textarea.vaule = code;
    drawCanvas();
});

textarea.addEventListener('input', drawCanvas);
window.addEventListener('load',drawCanvas);