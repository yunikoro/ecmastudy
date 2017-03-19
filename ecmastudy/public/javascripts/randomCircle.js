/**
 * Created by yunikoro on 2017/3/19.
 */

var btn = document.querySelector('button');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var WIDTH = document.Element.clientWidth;
var HEIGHT = document.Element.clientHeight;

function random(number) {
    return Math.floor(Math.random() * number);
}

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}