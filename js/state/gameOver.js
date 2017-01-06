BasicGame.GameOver = function(game) {
    this.game = game;
};

BasicGame.GameOver.prototype = {
    create: function() {
        this.background = BasicGame.createBackground(this);
        this.gameOver = this.game.add.sprite(this.game.world.width * 0.5, this.game.world.height * 0.5, 'gameOver');
        this.gameOver.anchor.set(0.5);

        this.welcomeText = 'tap to start';

        this.startLabel = this.game.add.text(this.game.world.width * 0.5, 0, this.welcomeText, { font: '25px Arial', fill: '#ffffff' });
        this.startLabel.anchor.set(0.5);
        this.startLabel.y = this.game.world.height - this.startLabel.height * 2;
    },

    update: function() {
        this.game.input.onDown.add(function() {
            this.state.start('Game');
        }, this);
    }
};
