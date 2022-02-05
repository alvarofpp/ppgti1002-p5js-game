var game;
var rain_drop_icon;
var background_color = '#0C695D';

function preload() {
  rain_drop_icon = loadImage('assets/images/rain_drop.png');
}

function setup() {
  game = new Game();
  createCanvas(600, 400);
  let size = game.rain_drop.size;
  rain_drop_icon.resize(size, size);
}

function draw() {
  background(background_color);
  game.renderScreen();
}

function mousePressed(){
  if (game.screen instanceof EndView || game.screen instanceof WonView) {
    game.screen = new StartView(game.screen.game);
  }
}
