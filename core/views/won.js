class WonView extends View {
  render() {
    background(background_color);
    textAlign(CENTER);
    this.renderVersion();
    
    let score = this.game.player.score;
    this.game.setMaxScore(score);
    
    fill(366);
    textSize(26);
    text('PARABÉNS!', width / 2, height / 2 - 100)
    
    textSize(16);
    let message = 'Agora você pode reutilizar a água coletada para\n'
      + 'dar descarga, lavar o chão, entre outras coisas.';
    text(message, width / 2, height / 2 - 40)
    
    textSize(12);
    text('SCORE = ' + score + ' (best score = ' + this.game.max_score + ')', width / 2, height / 2 + 80);
    text('clique para voltar ao menu inicial', width / 2, height / 2 + 100);
  }
}
