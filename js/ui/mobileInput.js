BasicGame.MobileInput=function(game,player){
  this.game=game;
  this.player=player;
  this.init();
};


BasicGame.MobileInput.prototype={
  init:function(){
    var upButton = this.game.add.sprite(0, 0, 'up');
    upButton.x=upButton.width/2;
    upButton.y=this.game.world.height-upButton.height*2.5;
  upButton.inputEnabled = true;
  upButton.alpha = 0.3;
  upButton.events.onInputOver.add(function(){
    this.player.moveUp = true;
  }, this);
  upButton.events.onInputOut.add(function(){
    this.player.moveUp = false;
  }, this);
  upButton.events.onInputDown.add(function(){
    this.player.moveUp = true;
  }, this);
  upButton.events.onInputUp.add(function(){
    this.player.moveUp = false;
  }, this);
  var downButton = this.game.add.sprite(0, 0, 'down');
  downButton.x=downButton.width/2;
  downButton.y=this.game.world.height-downButton.height;
  downButton.inputEnabled = true;
  downButton.alpha = 0.3;
  downButton.events.onInputOver.add(function(){
    this.player.moveDown = true;
  }, this);
  downButton.events.onInputOut.add(function(){
    this.player.moveDown = false;
  }, this);
  downButton.events.onInputDown.add(function(){
    this.player.moveDown = true;
  }, this);
  downButton.events.onInputUp.add(function(){
    this.player.moveDown = false;
  }, this);
  var shootButton = this.game.add.sprite(780, 470, 'shoot');
  shootButton.x=this.game.world.width-shootButton.width*1.5;
  shootButton.y=this.game.world.height-shootButton.height*1.5;
  shootButton.inputEnabled = true;
  shootButton.alpha = 0.3;
  shootButton.events.onInputOver.add(function(){
    this.player.shooting = true;
  }, this);
  shootButton.events.onInputOut.add(function(){
    this.player.shooting = false;
  }, this);
  shootButton.events.onInputDown.add(function(){
    this.player.shooting = true;
  }, this);
  shootButton.events.onInputUp.add(function(){
    this.player.shooting = false;
  }, this);
  }
};
