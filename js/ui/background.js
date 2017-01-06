//game background ui
BasicGame.createBackground = function(game) {
    this.game = game;
    // console.log("back--",this.game.world.width, this.game.world.height);
    var sky = game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'sky');
    var bg = game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background');
    bg.speed = -1.5;
    sky.speed = -1;

    bg.update = function() {
        this.tilePosition.x += this.speed;
    };

    sky.update = function() {
        this.tilePosition.x += this.speed;
    };

    return bg;
}
