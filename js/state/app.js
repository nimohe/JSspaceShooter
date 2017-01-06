  window.onload=function(){
  var targetWidth = 720; // the width of the game we want
  var targetHeight = 480; // the height of the game we want
  // additional ratios
  //Small – 360x240
  //Normal – 480x320
  //Large – 720x480
  //XLarge – 960x640
  //XXLarge – 1440x960
  var deviceRatio = (window.innerWidth/window.innerHeight); //device aspect ratio
  var newRatio = (targetHeight/targetWidth)*deviceRatio; //new ratio to fit the screen
  BasicGame.ratio=newRatio;
  var newWidth = targetWidth*newRatio;
  var newHeight = targetHeight;
  var gameWidth = newWidth;
  var gameHeight = newHeight;
  // var gameRendrer = Phaser.AUTO;
  // console.log("init--",gameWidth,gameHeight,"scale:"+BasicGame.ratio);
  // var game=new Phaser.Game(720,480,Phaser.AUTO,"game");
  var game=new Phaser.Game(gameWidth,gameHeight,Phaser.AUTO,"game");
  game.state.add("Boot",BasicGame.Boot);
  game.state.add("Preloader",BasicGame.Preloader);
  game.state.add("MainMenu",BasicGame.MainMenu);
  game.state.add("Game",BasicGame.Game);
  game.state.add("GameOver",BasicGame.GameOver);

  game.state.start("Boot");
};
