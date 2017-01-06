BasicGame.Explosion = function(game) {
    this.game = game;
    this.init();
};

BasicGame.Explosion.prototype = {

    init:function () {
        this.pools=this.game.add.group();
        this.pools.enableBody = true;
        this.pools.physicsBodyType = Phaser.Physics.ARCADE;
        this.pools.z=100;
        this.pools.createMultiple(4,"explosion");
    },

    addExplo:function(posX, posY) {
        var explosion=this.pools.getFirstDead();
        if(!explosion){
            return;
        }
        explosion.reset(posX,posY);
        explosion.anchor.setTo(.5);
        explosion.lifespan=100;
    }
};
