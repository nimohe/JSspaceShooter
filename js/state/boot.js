var BasicGame = {
    PLAYER_INIT_LIVE: 3,
    PLAYER_HEALTH: 3,
    ratio: 0,
    VER: "v:1.0.3",
    DAMAGE_SINGLE : 1,
    DAMAGE_DOUBLE : 2,
    DAMAGE_TRIPLE : 3,
    DAMAGE_SCATTER : 4,
    DAMAGE_DOUBLE_FROW : 5,
    ASTERIOD_BIG_HEALTH:1,
    ASTERIOD_SMAELL_HEALTH:1
};

BasicGame.Boot = function(game) {};

BasicGame.Boot.prototype = {
    init: function() {
        // console.log(this.state.current, "init");
        if (this.game.device.desktop) {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        } else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceLandscape = true;
        }
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    preload: function() {
        this.load.image('preloaderBar', 'assets/preloader-bar.png');
    },

    create: function() {
        this.state.start("Preloader");
    }
};
