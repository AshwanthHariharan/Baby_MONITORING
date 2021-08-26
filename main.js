img = "";

Alert = "";

status = "";

object = [];

function preload() {

img = loadImage("baby.jfif");

Alert = loadSound("alert_sound.mp3");

}

function setup() {

canvas = createCanvas(300, 300);

canvas.center();

ObjectDetector = ml5.objectDetector("cocossd", modelLoaded);

document.getElementById("status").innerHTML = "STATUS : BABY DETECTING";

}

function modelLoaded() {

console.log("Model Loaded!");

status = true;

}

function draw() {

image(img, 0, 0, 300, 300);

if(status != "") {

ObjectDetector.detect(img, gotResults);

for(i = 0; i < object.length; i++) {

document.getElementById("status").innerHTML = "STATUS : BABY DETECTED";

document.getElementById("number_of_babies").innerHTML = "NUMBER OF BABIES DETECTED ARE : " + object.length;

fill("red");

percent = floor(object[i].confidence * 100);

text(object[i].label + " " + percent + "%" , object[i].x + 15 , object[i].y + 15);

noFill();

stroke("red");

rect(object[i].x, object[i].y, object[i].width, object[i].height);

}

}

}

function gotResults(error, results) {

if(error) {

console.log(error);

}

console.log(results);

object = results;

}