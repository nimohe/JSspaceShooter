//player weapons
BasicGame.Weapon = function(game) {
    this.game = game;
    this.weapons = {};
    this.init();
};

BasicGame.Weapon.prototype = {

    init: function() {
        this.createSingle();
        this.createDouble();
        this.createTriple();
        this.createScatter();
        this.createDoubleGrow();
    },

    createSingle: function() {
        this.weapons.single = this.game.add.group();
        this.weapons.single.enableBody = true;
        this.weapons.single.createMultiple(10, 'bullet');
        this.weapons.single.nextFire = 0;
        this.weapons.single.bulletSpeed = 500;
        this.weapons.single.fireRate = 350;

        this.weapons.single.shoot = function(srcx, srcy) {
            var bullet = this.getFirstDead();
            if (!bullet) {
                return;
            }
            if (this.game.time.now > this.nextFire) {
                // bullet.lifespan=1000;
                bullet.anchor.setTo(0.5);
                bullet.reset(srcx + 100, srcy + 25);
                bullet.damage=BasicGame.DAMAGE_SINGLE;
                bullet.body.velocity.x = this.bulletSpeed;
                bullet.checkWorldBounds = true; 
                bullet.outOfBoundsKill = true;
                this.nextFire = this.game.time.now + this.fireRate;
            }
        }
    },

    createDouble: function() {
        this.weapons.double = this.game.add.group();
        this.weapons.double.enableBody = true;
        this.weapons.double.createMultiple(10, "doubleBullet");
        this.weapons.double.nextFire = 0;
        this.weapons.double.bulletSpeed = 500;
        this.weapons.double.fireRate = 250;

        this.weapons.double.shoot = function(srcx, srcy) {
            if (this.game.time.now > this.nextFire) {
                for (var i = 0; i < 2; i++) {
                    var bullet = this.getFirstDead();
                    if (!bullet) {
                        return;
                    }
                    bullet.anchor.setTo(0.5);
                    var verticalPos = i == 0 ? 10 : 50;
                    bullet.reset(srcx + 100, srcy + verticalPos);
                    bullet.damage=BasicGame.DAMAGE_DOUBLE;
                    bullet.body.velocity.x = this.bulletSpeed;
                    bullet.checkWorldBounds = true;
                    bullet.outOfBoundsKill = true;
                }
                this.nextFire = this.game.time.now + this.fireRate;
            }
        }
    },

    createTriple: function() {
        this.weapons.triple = this.game.add.group();
        this.weapons.triple.enableBody = true;
        this.weapons.triple.createMultiple(20, 'tripleBullet');
        this.weapons.triple.nextFire = 0;
        this.weapons.triple.bulletSpeed = 500;
        this.weapons.triple.fireRate = 300;

        this.weapons.triple.shoot = function(srcx, srcy) {
            if (this.game.time.now > this.nextFire) {
                for (var i = 0; i < 3; i++) {
                    var bullet = this.getFirstDead();
                    if (!bullet) {
                        return;
                    }
                    var vertSpeed;
                    switch (i) {
                        case 0:
                            vertSpeed = 100;
                            break;
                        case 1:
                            vertSpeed = -100;
                            break;
                        case 2:
                            vertSpeed = 0;
                            break;
                    }
                    bullet.anchor.setTo(0.5);
                    bullet.reset(srcx + 100, srcy + 25);
                    bullet.damage=BasicGame.DAMAGE_TRIPLE;
                    bullet.body.velocity.x = this.bulletSpeed;
                    bullet.body.velocity.y = vertSpeed;
                    bullet.checkWorldBounds = true;
                    bullet.outOfBoundsKill = true;
                    this.nextFire = this.game.time.now + this.fireRate;
                }
                this.nextFire = this.game.time.now + this.fireRate;
            }
        }
    },

    createScatter: function() {
        this.weapons.scatter = this.game.add.group();
        this.weapons.scatter.enableBody = true;
        this.weapons.scatter.createMultiple(30, 'scatterBullet');
        this.weapons.scatter.nextFire = 0;
        this.weapons.scatter.bulletSpeed = 500;
        this.weapons.scatter.fireRate = 100;

        this.weapons.scatter.shoot = function(srcx, srcy) {
            var bullet = this.getFirstDead();
            if (!bullet) {
                return;
            }
            if (this.game.time.now > this.nextFire) {
                var randomPos = this.game.rnd.between(-25, 25)
                bullet.anchor.setTo(0.5);
                bullet.reset(srcx + 100, srcy + 30 + randomPos);
                bullet.damage=BasicGame.DAMAGE_SCATTER;
                bullet.body.velocity.x = this.bulletSpeed;
                bullet.checkWorldBounds = true;
                bullet.outOfBoundsKill = true;
                this.nextFire = this.game.time.now + this.fireRate;
            }
        }
    },

    createDoubleGrow: function() {
        this.weapons.doubleGrow = this.game.add.group();
        this.weapons.doubleGrow.enableBody = true;
        this.weapons.doubleGrow.createMultiple(20, 'doubleGrow');
        this.weapons.doubleGrow.nextFire = 0;
        this.weapons.doubleGrow.bulletSpeed = 500;
        this.weapons.doubleGrow.fireRate = 250;

        this.weapons.doubleGrow.shoot = function(srcx, srcy) {
            if (this.game.time.now > this.nextFire) {
                for (var i = 0; i < 2; i++) {
                    var bullet = this.getFirstDead();
                    if (!bullet) {
                        return;
                    }
                    bullet.scale.x = 1;
                    bullet.scale.y = 1;
                    bullet.anchor.setTo(0.5);
                    var verticalPos = i == 0 ? 10 : 50;
                    bullet.reset(srcx + 100, srcy + verticalPos);
                    bullet.damage=BasicGame.DAMAGE_DOUBLE_FROW;
                    bullet.body.velocity.x = this.bulletSpeed;
                    bullet.checkWorldBounds = true;
                    bullet.outOfBoundsKill = true;
                    bullet.scaleSpeed = 0.05;
                    bullet.update = function() {
                        this.scale.x += this.scaleSpeed;
                        this.scale.y += this.scaleSpeed;
                    }
                    this.nextFire = this.game.time.now + this.fireRate;
                }
                this.nextFire = this.game.time.now + this.fireRate;
            }
        }
    },

    getWeapons: function() {
        return this.weapons;
    }
};
