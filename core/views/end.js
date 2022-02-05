class EndView extends View {
  render() {
    background(0);
    textAlign(CENTER);
    this.renderVersion();
    
    let score = this.game.player.score;
    this.game.setMaxScore(score);
    
    text('GAME OVER', width / 2, height / 2)
    text('SCORE = ' + score + ' (best score = ' + this.game.max_score + ')', width / 2, height / 2 + 20);
    text('clique para voltar ao menu inicial', width / 2, height / 2 + 40);
  }
}
