const canvas = document.getElementById('gameBase');

const context = canvas.getContex("2d");


const width = 800;
const height = 400;

canvas.width = width;
canvas.height = height;

var gravity;
var obstacles = [];
var gameSpeed;
var keys = {};

