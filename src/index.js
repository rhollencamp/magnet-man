import Phaser from 'phaser';

var game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    resize: resize
  },
  canvas: document.getElementsByTagName('canvas')[0]
});
function preload() {
  this.load.setBaseURL("https://labs.phaser.io");
  this.load.image("sky", "assets/skies/space3.png");
  this.load.image("logo", "assets/sprites/phaser3-logo.png");
  this.load.image("red", "assets/particles/red.png");
}
function create() {
  this.add.image(400, 300, "sky");
  var particles = this.add.particles("red");
  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: "ADD"
  });
  var logo = this.physics.add.image(400, 100, "logo");
  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);
  emitter.startFollow(logo);

  this.events.on('resize', resize, this);
}
function resize(width, height) {
  if (width === undefined) { width = this.sys.game.config.width; }
  if (height === undefined) { height = this.sys.game.config.height; }

  this.physics.world.bounds.width = width;
  this.physics.world.bounds.height = height;

  this.cameras.resize(width, height);
}

window.addEventListener('resize', function (event) {
  var width = document.querySelector('div.card-body').clientWidth;
  var height = document.querySelector('div.card-body').clientHeight;
  game.resize(width, height);
}, false);