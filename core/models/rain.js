class Rain extends Model {
  constructor(game) {
    super(game);
    this.song = loadSound('assets/audios/sound_rain.mp3');
  }
  
  render() {
    if (this.drops >= this.total) {
      return;
    }
    
    rectMode(CORNER);
    fill(96, 157, 255);
    rect(this.x, this.y, this.getPercent(), 20);
  }
  
  reset() {
    this.drops = 0;
    this.total = 30;
    this.x = 50;
    this.y = 20;
    this.speed = 2;
  }
  
  getPercent() {
    return (100 - (this.drops*100) / this.total).toFixed(2);
  }
  
  incrementDrop() {
    if (!this.isOver()) {
      this.drops++;
    }
  }
  
  isOver() {
    return this.drops === this.total;
  }
  
  incrementSpeed() {
    this.speed += 0.5;
  }
  
  decrementSpeed() {
    this.speed -= 3.0;
    
    if (this.speed < 2.0) {
      this.speed = 2.0;
    }
  }
}