class HistoryView extends View {
  render() {
    background(background_color);
    fill(255);
    textAlign(CENTER);
    
    this.renderTitle();
    this.renderText();
    this.renderButtonToNext();
    this.renderVersion();
  }
  
  renderText() {
    textSize(16);
    textAlign(CENTER);
    rectMode(CORNER);
    
    let x = width / 2;
    let y = height / 2 - 40;
    let control_text = 'Você esta no sossego de sua casa quando,\n'
      + 'de repente, começa uma chuva forte. Como sua casa não possui\n'
      + 'forro, algumas goteiras começam a surgir, ameaçando os seus\n'
      + 'produtos eletrônicos, revistas, entre outros objetos.\n\n'
      + 'Você agora tem que usar uma bacia para impedir que as gotas\n'
      + 'caiam nos seus objetos até a chuva passar. Como bônus,\n'
      + 'você pode reutilizar essa água.';
    
    text(control_text, x, y);
  }
  
  renderButtonToNext() {
    textSize(12);
    let x = width / 2;
    let y = height / 2 + 130;
    let text_btn = 'clique com o seu mouse para começar a jogar';
    let text_width = textWidth(text_btn) + 10;
    let text_height = 15;
    
    let min_x = x-text_width/2;
    let max_x = x+text_width/2;
    let min_y = y-text_height;
    let max_y = y;
    let is_hovering = this.isHovering(min_x, max_x, min_y, max_y);

    if (is_hovering) {
      this.printRectHovering(x-text_width/2, y-text_height, text_width, text_height);
    }
    
    if (mouseIsPressed && mouseButton === LEFT && is_hovering) {
      this.startGame();
    }
    
    fill(360);
    text(text_btn, x, y);
  }
  
  startGame() {
    this.game.screen = new GameOnView(this.game);
  }
}
