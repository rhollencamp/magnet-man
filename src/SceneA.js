var Phaser = require('phaser');

var fooUrl = require('./foo.png');

var SceneA = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function() {
    Phaser.Scene.call(this, { key: 'sceneA' });
  },

  preload: function() {
    this.load.spritesheet('foo', fooUrl, { frameWidth: 100, frameHeight: 100 });
  },

  create: function() {
    var anim = this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('foo', { frames: [0, 1, 2, 1, 0, 3, 4, 3] }),
      frameRate: 6,
      repeat: -1
    });
    var sprite = this.add.sprite(100, 100, 'foo');
    sprite.anims.load('walk');

    sprite.anims.play('walk');
  },

  resize: function(width, height) {
    if (width === undefined) { width = this.sys.game.config.width; }
    if (height === undefined) { height = this.sys.game.config.height; }

    this.physics.world.bounds.width = width;
    this.physics.world.bounds.height = height;

    this.cameras.resize(width, height);
  }
});

module.exports = SceneA;
