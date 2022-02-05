class Player extends Model {
  render() {
    rectMode(CENTER);
    
    let x = mouseX;
    
    if (x < 0) {
      x = 0;
    } else if (x > width) {
      x = width;
    }
    
    fill(366);
    rect(x, height-10, 50, 30);
  }
  
  reset() {
    this.score = 0;
    this.life = 3;
  }
  
  decrementLife() {
    if (this.life > 0) {
      this.life--;
    }
  }
  
  lifeIsOver() {
    return this.life == 0;
  }
}