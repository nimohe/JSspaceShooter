BasicGame.PowerUp = function(game) {
    this.game = game;
    this.init();
};

BasicGame.PowerUp.prototype = {
    init: function() {
        this.pools = this.game.add.group();
        this.pools.enableBody = true;
        this.pools.physicsBodyType = Phaser.Physics.ARCADE;
        this.pools.createMultiple(4, "powerUp");
    },

    add: function(posX, posY) {
        var chance = this.game.rnd.integerInRange(1, 10);
        if(chance!=1){
          return;
        }
        var powerUp = this.pools.getFirstExists(false);
        if (!powerUp) {
            return;
        }
        var speed_vel = this.game.rnd.integerInRange(50, 0);
        var speed_hot = this.game.rnd.integerInRange(-50, -100);
        powerUp.anchor.set(0.5);
        powerUp.reset(posX, posY);
        powerUp.lifespan = 5000;
        powerUp.body.velocity.x = speed_hot;
        powerUp.body.velocity.y = speed_vel;
    },

    update: function() {
        this.pools.forEachExists(
            function(item) {
                if (item.y >= this.game.world.height - item.height - 50) {
                    item.y = this.game.world.height - item.height - 51;
                    item.body.velocity.y *= -1;
                }
            }, this
        );
    }

};
