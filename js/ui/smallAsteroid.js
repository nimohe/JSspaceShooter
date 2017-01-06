BasicGame.SmallAsteroid = function(game) {
    this.game = game;
    this.asteroidPools;
    this.health=BasicGame.ASTERIOD_SMAELL_HEALTH;
    this.init();
};

BasicGame.SmallAsteroid.prototype = {
    init: function() {
        // console.log("small asteroid init");
        this.asteroidPools = this.game.add.group();
        this.asteroidPools.enableBody = true;
        this.asteroidPools.createMultiple(15, "smallAsteroid");
        this.asteroidPools.setAll("anchor.x", .5);
        this.asteroidPools.setAll("anchor.y", .5);
        this.asteroidPools.setAll("checkWorldBounds", true);
        this.asteroidPools.setAll("outOfBoundsKill", true);
        this.asteroidPools.speed = 50;
    },

    update: function() {
        this.asteroidPools.forEachExists(function(item) {
            item.angle += 2;
            if (item.y >= this.game.world.height - item.height - 50) {
                item.y = this.game.world.height - item.height - 51;
                item.body.velocity.y *= -1;
            } else if (item.y <= item.height) {
                item.y = item.height + 1;
                item.body.velocity.y *= -1;
            }
        }, this)
    },

    addSmall: function(astX, astY) {
        var num = this.game.rnd.integerInRange(2, 4);
        for (var i = 0; i < num; i++) {
            var asteroid = this.asteroidPools.getFirstDead();
            if (!asteroid) {
                return;
            }
            var verticalspeed = this.game.rnd.integerInRange(-50, 50);
            var hotizonstalspeed = this.game.rnd.integerInRange(-50, -150);
            asteroid.anchor.setTo(0.5);
            asteroid.reset(astX, astY,this.health);
            asteroid.body.velocity.x = hotizonstalspeed;
            asteroid.body.velocity.y = verticalspeed;
            asteroid.attackVal = 1;
            asteroid.scoreVal = 50;
        }
    }
};
