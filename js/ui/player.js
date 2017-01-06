BasicGame.Player = function(game) {
    this.game = game;
    this.weapons;
    this.moveUp = false;
    this.moveDown = false;
    this.moveLeft = false;
    this.moveRight = false;
    this.shooting = false;
    this.live = BasicGame.PLAYER_INIT_LIVE;
    this.weaponList = ['single','double','triple','scatter','doubleGrow'];
    this.currWeapon = "single";
    this.currWeapnIndex=0;
    this.init();
};

BasicGame.Player.prototype = {
    init: function() {
        this.player = this.game.add.sprite(150, 300, "player");
        this.player.enableBody = true;
        this.player.health = 3;
        this.player.alive = true;
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.setSize(this.player.width, this.player.height, 0, 0);
        this.player.body.collideWorldBounds = true;
        return this;
    },

    shoot: function() {
        this.weapons[this.currWeapon].shoot(this.player.x, this.player.y);
    },

    update: function() {
        //move player
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP) || this.moveUp) {
            this.player.body.velocity.y = -200;
        } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN) || this.moveDown) {
            this.player.body.velocity.y = 200;
        } else {
            this.player.body.velocity.y = 0;
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || this.moveLeft) {
            this.player.body.velocity.x = -200;
        } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || this.moveRight) {
            this.player.body.velocity.x = 200;
        } else {
            this.player.body.velocity.x = 0;
        }

        //shoot
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || this.shooting) {
            this.shoot();
        }
    },

    increaseWeaponPower:function () {
        this.currWeapnIndex++;
        this.currWeapnIndex = Math.min(this.currWeapnIndex,this.weaponList.length-1);
        this.currWeapon = this.weaponList[this.currWeapnIndex];
    },

    reset:function () {
        this.currWeapnIndex=0;
        this.currWeapon = this.weaponList[this.currWeapnIndex];
    }
};
