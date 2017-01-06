BasicGame.InfoPanel = function(game) {
    this.game = game;
    this.score = 0;
    this.live = 0;
    //this.init();
};

BasicGame.InfoPanel.prototype = {
    init: function() {
        this.scoreTxt = this.game.add.bitmapText(0, 0, "font", "Score:", 60);
        this.scoreTxt.text += "" + this.pad(0, 5);
        this.scoreTxt.x = this.game.world.width - this.scoreTxt.width - 10;

        this.liveTxt = this.game.add.bitmapText(0, 0, "font", "Lives:" + this.live, 60);
    },

    setPlayerLive: function(val) {
        this.liveTxt.text = "Lives:" + val;
    },

    addScore: function(val) {
        this.score += val;
        this.score = this.score > 99999 ? 99999 : this.score;
        var temp = this.scoreTxt.text;
        temp = temp.slice(0, 6);
        this.scoreTxt.text = temp;
        // console.log(temp);
        this.scoreTxt.text += "" + this.pad(this.score, 5);
    },

    pad: function(num, n) {
        var len = num.toString().length;
        while (len < n) {
            num = "0" + num;
            len++;
        }
        return num;
    }


};
