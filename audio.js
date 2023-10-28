var song;

function preload() {
    song = loadSound("bloodHazard.mp3");
}

function setup() {
    createCanvas(200, 200);
    song.play();

}

function draw() {
    background(0);
}