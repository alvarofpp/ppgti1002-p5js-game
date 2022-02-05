class AboutView extends View {
  render() {
    background(background_color);
    fill(255);
    textAlign(CENTER);
    rectMode(CENTER);
    
    this.renderTitle();
    this.renderText();
    this.renderBackButton();
    this.renderVersion();
  }
  
  renderText() {
    textSize(16);
    textAlign(CENTER);
    
    let x = width / 2;
    let y = height / 2 - 60;
    let control_text = 'Jogo criado pelo aluno\n'
      + 'Álvaro Ferreira Pires de Paiva (20211028885, alvarofepipa@gmail.com)\n'
      + 'para a disciplina de\n'
      + 'Desenvolvimento de Jogos Digitais (PPGTI1002, T01, 2021.2)\n'
      + 'ministrada pelo professor\n'
      + 'Rummenigge Rudson Dantas.';
    
    text(control_text, x, y);
  }
  
  renderBackButton () {
    textSize(18);
    let x = width / 2;
    let y = height / 2 + 120;
    let text_btn = 'voltar';
    let text_width = textWidth(text_btn) + 10;
    let text_height = 20;
    
    let min_x = x-text_width/2;
    let max_x = x+text_width/2;
    let min_y = y-text_height;
    let max_y = y;
    let is_hovering = this.isHovering(min_x, max_x, min_y, max_y);

    if (is_hovering) {
      this.printRectHovering(x, y-text_height/2, text_width, text_height);
    }
    
    if (mouseIsPressed && mouseButton === LEFT && is_hovering) {
      this.returnScreen();
    }
    
    fill(360);
    text(text_btn, x, y);
  }
  
  returnScreen() {
    this.game.screen = new StartView(this.game);
  }
}
