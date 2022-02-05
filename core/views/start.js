class StartView extends View {
  render() {
    // background(96, 157, 255);
    background(background_color);
    fill(255);
    textAlign(CENTER);
    rectMode(CORNER);
    
    this.renderTitle();
    this.renderMenu();
    this.renderVersion();
    
    this.game.reset();
  }
  
  renderMenu() {
    textSize(18);
    textAlign(CENTER);
    
    let options = [
      'jogar',
      'controles',
      'sobre',
    ]
    let x = width / 2;
    let y = height / 2 - 20;
    let option_height = 20;
    let text_width = textWidth(this.game.title);
    
    for (let index = 0; index < options.length; index++) {
      let calc_y = y + option_height * index;
      let min_x = x-text_width/2;
      let max_x = x+text_width/2;
      let min_y = calc_y-option_height;
      let max_y = calc_y;
      let is_hovering = this.isHovering(min_x, max_x, min_y, max_y);
      
      if (is_hovering) {
        // console.log([x-text_width/2, calc_y-option_height, text_width, option_height]);
        this.printRectHovering(x-text_width/2, calc_y-option_height, text_width, option_height);
      }
      
      if (mouseIsPressed && mouseButton === LEFT && is_hovering) {
        this.changeScreen(index);
      }
      
      fill(360);
      text(options[index], x, calc_y);
    }
  }
  
  changeScreen(index) {
    if (index === 0) {
      this.game.screen = new HistoryView(this.game);
    } else if (index === 1) {
      this.game.screen = new ControlView(this.game);
    } else if (index === 2) {
      this.game.screen = new AboutView(this.game);
    }
  }
}
