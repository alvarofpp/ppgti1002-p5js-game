class Game {
  constructor() {
    this.title = 'GOTEIRA';
    this.screen = new StartView(this);
    this.player = new Player(this);
    this.rain = new Rain(this);
    this.rain_drop = new RainDrop(this);
    this.max_score = 0;
  }
  
  renderScreen() {
    this.screen.render();
  }
  
  reset() {
    this.player.reset();
    this.rain.reset();
    this.rain_drop.reset();
  }
  
  setMaxScore(score) {
    if (this.max_score < score) {
      this.max_score = score;
    }
  }
}