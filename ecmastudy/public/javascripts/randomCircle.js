/**
 * Created by yunikoro on 2017/3/19.
 */

var btn = document.querySelector('button');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var WIDTH = document.documentElement.clientWidth;
var HEIGHT = document.documentElement.clientHeight;

function random(number) {
    return Math.floor(Math.random() * number);
}

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for(var i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2*Math.PI);
        ctx.fill();
    }
}

btn.addEventListener('click', draw);