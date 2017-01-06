BasicGame.MainMenu = function(game) {};

BasicGame.MainMenu.prototype = {
    init: function() {
        // console.log(this.state.current, "init");
    },
    create: function() {

        this.background = BasicGame.createBackground(this);
        this.splash = this.add.sprite(this.game.width * 0.5, this.game.height * 0.5, 'splash');
        this.splash.anchor.set(0.5);

        this.welcomeText = 'tap to start';

        this.startLabel = this.add.text(this.game.width * 0.5, 0, this.welcomeText, { font: '25px Arial', fill: '#ffffff' });
        this.startLabel.anchor.set(0.5);
        this.startLabel.y = this.game.height - this.startLabel.height * 2;
        // console.log("start info panel");

        this.verText = this.add.text(0, 0, BasicGame.VER, { font: '12px Arial', fill: '#ffffff' });
        this.verText.x = this.world.width - this.verText.width - 10;
        this.verText.y = this.world.height - this.verText.height - 10;
    },
    update: function() {
        if (this.input.activePointer.isDown) {
            this.destory();
            this.state.start("Game");
        }
    },

    destory: function() {
        // console.log(this.state.current, "--------destory");
        this.background.destroy();
        this.splash.destroy();
        this.startLabel.destroy();
    }

};
