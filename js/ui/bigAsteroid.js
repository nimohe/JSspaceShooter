BasicGame.BigAsteroid = function(game) {
    this.game = game;
    this.speed = 50;
    this.lastAsteroid = -200;
    this.acteroidsEvery = 1800;
    this.bigAsteroidPool;
    this.health = BasicGame.ASTERIOD_BIG_HEALTH;
    this.init();
};

BasicGame.BigAsteroid.prototype = {
    init: function() {
        this.bigAsteroidPool = this.game.add.group();
        this.bigAsteroidPool.enableBody = true;
        this.bigAsteroidPool.physicsBodyType = Phaser.Physics.ARCADE;
        this.bigAsteroidPool.createMultiple(10, "bigAsteroid");
        this.bigAsteroidPool.setAll("anchor.x", .5);
        this.bigAsteroidPool.setAll("anchor.y", .5);
        this.bigAsteroidPool.setAll("checkWorldBounds", true);
        this.bigAsteroidPool.setAll("outOfBoundsKill", true);
    },

    addAsteroid: function() {
        var asteroid = this.bigAsteroidPool.getFirstDead();
        if (!asteroid) return;
        this.pos = this.game.rnd.integerInRange(50, this.game.world.height - 100);
        asteroid.direction = this.game.rnd.integerInRange(0, 1);
        asteroid.reset(this.game.world.width, this.pos, this.health);
        asteroid.body.velocity.x = -100;
        asteroid.attackVal = 3;
        asteroid.scoreVal = 100;
    },

    update: function() {
        if (this.game.time.now - this.lastAsteroid > this.acteroidsEvery) {
            this.addAsteroid();
            this.lastAsteroid = this.game.time.now;
        }

        this.bigAsteroidPool.forEachExists(function(item) {
            if (item.turnDirection) {
                item.angle += 0.5;
            } else {
                item.angle -= 0.5;
            }
        }, this)
    },

    getPool: function() {
        return this.bigAsteroidPool;
    }
};
