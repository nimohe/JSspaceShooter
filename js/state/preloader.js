BasicGame.Preloader = function(game) {
    this.preloadBar = null;
};


BasicGame.Preloader.prototype = {
    init: function() {
        // console.log(this.state.current, "init");
    },

    preload: function() {
        this.stage.backgroundColor = '#2d2d2d';

        this.preloadBar = this.add.sprite(this.game.width / 2 - 100, this.game.height / 2, 'preloaderBar');
        this.add.text(this.game.width / 2, this.game.height / 2 - 30, "Loading...", { font: "32px monospace", fill: "#fff" }).anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('background', 'assets/bg.png');
        this.load.image('sky', 'assets/bgSky.png');
        this.load.image('player', 'assets/player.png');
        this.load.image('bullet', 'assets/bullet.png');
        this.load.image('doubleBullet', 'assets/doubleBullet.png');
        this.load.image('tripleBullet', 'assets/trippleBullet.png');
        this.load.image('scatterBullet', 'assets/scatterBullet.png');
        this.load.image('doubleGrow', 'assets/doubleGrow.png');
        this.load.image('enemyBullet', 'assets/enemyBullet.png');
        this.load.image('bigAsteroid', 'assets/bigAsteroid.png');
        this.load.image('smallAsteroid', 'assets/smallAsteroid.png');
        this.load.image('powerUp', 'assets/powerUp.png');
        this.load.image('fEnemyShip', 'assets/fEnemyShip.png');
        this.load.image('enemyShip', 'assets/enemyShip.png');
        this.load.spritesheet('turret', 'assets/turret.png', 40, 70);
        this.load.image('up', 'assets/up.png');
        this.load.image('down', 'assets/down.png');
        this.load.image('shoot', 'assets/shoot.png');
        this.load.image('explosion', 'assets/explosion.png');
        this.load.image('livesTXT', 'assets/livesTXT.png');
        //  this.load.image('scoreTXT', 'assets/scoreTXT.png');
        this.load.image('gameOver', 'assets/gameOver.png');
        this.load.image('splash', 'assets/splash.png');
        //  this.load.spritesheet('score', 'assets/scoreNums.png',25,40);
        //  this.load.bitmapText("score",'assets/scoreNums.png',25,40);
        this.load.bitmapFont('font', 'assets/font.png', 'assets/font.xml');
    },

    create: function() {
        this.preloadBar.cropEnabled = false;
    },

    update: function() {
        this.destory();
        this.state.start("MainMenu");
    },

    destory: function() {
        // console.log(this.state.current, "destory");
    }

};
