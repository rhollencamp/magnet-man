var Phaser = require('phaser');
var SceneA = require('./SceneA');

var game = new Phaser.Game({
  type: Phaser.AUTO,
  width: document.querySelector('div.card-body').clientWidth,
  height: 480,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [SceneA],
  canvas: document.getElementsByTagName('canvas')[0]
});


window.addEventListener('resize', function (event) {
  var width = document.querySelector('div.card-body').clientWidth;
  var height = document.querySelector('div.card-body').clientHeight;
  game.resize(width, height);
}, false);