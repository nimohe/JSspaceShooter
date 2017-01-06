BasicGame.Game = function(game) {
    this.game = game;
};

BasicGame.Game.prototype = {

    create: function() {
        this.background = BasicGame.createBackground(this);
        this.weapon = new BasicGame.Weapon(this);
        this.player = new BasicGame.Player(this);
        if (!this.game.device.desktop) {
            this.mobileInput = new BasicGame.MobileInput(this, this.player);
        }
        this.player.weapons = this.weapon.getWeapons();

        this.explosion = new BasicGame.Explosion(this);
        //small asteroid
        this.smallAsteroid = new BasicGame.SmallAsteroid(this.game);
        this.bigAsteroid = new BasicGame.BigAsteroid(this);
        //create infoPanel
        this.infoPanel = new BasicGame.InfoPanel(this);
        this.infoPanel.live = this.player.live;
        this.infoPanel.init();

        this.powerUp = new BasicGame.PowerUp(this.game);
    },

    update: function() {
        this.player.update();
        this.bigAsteroid.update();
        this.smallAsteroid.update();
        this.powerUp.update();
        this.checkHit();
    },

    gameOver: function() {
        this.state.start("GameOver");
    },

    checkHit: function() {
        this.game.physics.arcade.overlap(this.player.player, this.bigAsteroid.bigAsteroidPool, this.playerHitBigAsteroid, null, this);
        this.game.physics.arcade.overlap(this.bigAsteroid.bigAsteroidPool, this.player.weapons[this.player.currWeapon], this.bigAsteroidHitWeapon, null, this);
        this.game.physics.arcade.overlap(this.smallAsteroid.asteroidPools, this.player.weapons[this.player.currWeapon], this.smallAsteroidHitWeapon, null, this);
        this.game.physics.arcade.overlap(this.player.player, this.smallAsteroid.asteroidPools, this.playerHitSmallAsteroid, null, this);
        this.game.physics.arcade.overlap(this.player.player, this.powerUp.pools, this.playerHitPowerUp, null, this);

    },

    playerHitPowerUp: function(player, powerUp) {
        powerUp.kill();
        this.player.increaseWeaponPower();
    },

    playerHitSmallAsteroid: function(player, smallAsteroid) {
        this.damagePlayer(smallAsteroid.attackVal);
        this.explosion.addExplo(smallAsteroid.x, smallAsteroid.y);
        smallAsteroid.kill();
    },

    damagePlayer: function(damageVal) {
        this.player.player.damage(damageVal);
        this.player.reset();
        if (!this.player.player.alive) {
            this.explosion.addExplo(this.player.player.x, this.player.player.y);
            this.player.player.kill();
            this.player.live--;
            this.infoPanel.setPlayerLive(this.player.live);
            if (this.player.live <= 0) {
                this.gameOver();
            }
            this.game.time.events.add(500, function() {
                this.player.player.revive(BasicGame.PLAYER_HEALTH);
            }, this);
        }
    },

    smallAsteroidHitWeapon: function(smallAsteroid, weapon) {
        this.explosion.addExplo(smallAsteroid.x, smallAsteroid.y);
        this.infoPanel.addScore(smallAsteroid.scoreVal);
        smallAsteroid.damage(weapon.damage);
        if(!smallAsteroid.alive){
            weapon.kill();
        }
        this.powerUp.add(smallAsteroid.x, smallAsteroid.y); //add powerUp
        smallAsteroid.kill();
    },

    bigAsteroidHitWeapon: function(asteroid, weapon) {
        // asteroid.damage(1);
        console.log("weapon.damage------"+weapon.damage);
        asteroid.damage(weapon.damage);
        if (asteroid.alive) {

        } else {
            this.smallAsteroid.addSmall(asteroid.x, asteroid.y);
            this.explosion.addExplo(asteroid.x, asteroid.y);
            this.infoPanel.addScore(asteroid.scoreVal);
            asteroid.kill();
        }
        weapon.kill();
    },

    playerHitBigAsteroid: function(player, asteroid) {
        player.damage(asteroid.attackVal);
        this.explosion.addExplo(asteroid.x, asteroid.y);
        asteroid.kill();
        this.damagePlayer(asteroid.attackVal);
    },

    render: function() {
        // this.game.debug.body(this.player);
    }
};
