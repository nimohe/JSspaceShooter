## Refactoring

### changed

1. add function: scale game to mobile devices

2. use `bitmapText` (not `sprite`) to show score value

3. change class style

```javascript
//new class style
var BasciGame={};
BasciGame.Player=function(){};
BasciGame.Player.prototype={
  init:function(){
    console.log("hi");
  }
};

//use
var player=new BasicGame.Player();
player.init();

```

---

###

. [play online](https://nimohe.github.io/JSspaceShooter/)

. scan QR:[QR code](https://nimohe.github.io/JSspaceShooter/QR.png)
