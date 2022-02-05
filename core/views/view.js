class View {
  constructor(game) {
    this.game = game;
  }
  
  render() {
    throw new NotImplementedException();
  }
  
  renderTitle() {
    textSize(26);
    text(this.game.title, width / 2, height / 2 - 100)
  }
  
  isHovering(x_left, x_right, y_top, y_bottom) {
    return (mouseX >= x_left && mouseX <= x_right)
      && (mouseY >= y_top && mouseY <= y_bottom);
  }
  
  printRectHovering(x, y, text_width, text_height) {
    fill(background_color);
    rect(x, y, text_width, text_height);
  }
  
  renderVersion() {
    textSize(12);
    text('v1.0', width-15, height-5);
  }
}
