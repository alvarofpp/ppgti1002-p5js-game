class GameOnView extends View {
  constructor(game) {
    super(game);
    this.game.rain.song.play();
  }
  
  render() {
    background(0);
    this.renderScore();
    this.renderRainDuration();
    this.renderLife();
    
    const {player, rain, rain_drop} = this.game;
    
    if (rain.isOver() && player.lifeIsOver()) {
      this.game.screen = new EndView(this.game);
      this.game.rain.song.stop();
    }
    
    if (player.lifeIsOver()) {
      rain.incrementDrop();
      return;
    }
    
    if (this.game.rain.isOver()) {
      this.game.screen = new WonView(this.game);
      this.game.rain.song.stop();
    }
    
    rain_drop.render();
    rain_drop.move();
    player.render();
    
    if (rain_drop.wasNotCaught()) {
      player.decrementLife();
      rain.decrementSpeed();
      rain.incrementDrop();
      rain_drop.reset();
    }
    
    if (rain_drop.gotCaught()) {
      player.score++;
      rain.incrementSpeed();
      rain.incrementDrop();
      rain_drop.reset();
    }
  }
  
  renderScore() {
    textSize(12);
    text('score = ', 30, 15);
    text(this.game.player.score, 55, 15);
  }
  
  renderRainDuration() {
    textSize(12);
    text('chuva = ', 30, 35);
    this.game.rain.render();
    fill(366);
    text(this.game.rain.getPercent() + '%', 75, 35);
  }
  
  renderLife() {
    fill(142, 22, 0);
    rectMode(CORNER);
    
    let x = 575;
    let distance = 20;
    
    for (let life = 0; life < this.game.player.life; life++) {
      rect(x, 10, 20, 20);
      x -= distance;
    }
  }
}
