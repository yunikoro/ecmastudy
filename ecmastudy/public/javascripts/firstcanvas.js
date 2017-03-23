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


var tutCanvas = document.getElementById('tutorial');
var rect = document.getElementById('rect');
var tri = document.getElementById('tri');
var smile = document.getElementById('smile');

function draw(){
    if(tutCanvas.getContext) {
        var ctx = tutCanvas.getContext('2d');
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
    } else {
        console.log('canvas unsupport');
    }
    threeRec();
    triDraw();
    drowsmile();
}

function threeRec() {
    var ctx = rect.getContext('2d');
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
}

function triDraw() {
    var ctx = tri.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.lineTo(75, 50);
    ctx.stroke();
}

function drowsmile() {
    var ctx = smile.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
    ctx.stroke();
    
}
//document.body.addEventListener('load', draw);
