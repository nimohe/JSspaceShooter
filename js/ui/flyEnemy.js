BasicGame.FlyEnemy=function (game) {
	this.game=game;
};

BasicGame.FlyEnemy.prototype = {
	init:function () {
		this.pools=this.game.add.group();
		this.pools.enableBody=true;
		this.pools.createMultiple(4,"fEnemyShip");

	}		
};