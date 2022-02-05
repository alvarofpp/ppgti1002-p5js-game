class RainDrop extends Model {
  constructor(game) {
    super(game);
  }
  
  render() {
    fill(366);
    image(rain_drop_icon, this.x-this.size/2, this.y-this.size/2);
  }
  
  reset() {
    this.size = 20;
    this.x = random(this.size, width-this.size);
    this.y = -this.size;
  }
  
  move() {
    this.y += this.game.rain.speed;
  }
  
  gotCaught() {
    return this.y > height-10 && this.x > mouseX-20 && this.x < mouseX+20;
  }
  
  wasNotCaught() {
    return this.y > height;
  }
}