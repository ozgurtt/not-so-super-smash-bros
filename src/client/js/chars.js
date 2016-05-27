function Character (controller) {
  var x, y, character, left, right, jump;
  switch(true) {
    case controller === 0:
      x = 50;
      y = game.world.height - 150;
      character = 'megaman';
      left = [0, 1, 2, 3];
      right = [6, 7, 8, 9];
      jump = [10];
      break;
    case controller === 1:
      x = 200;
      y = game.world.height - 150;
      character = 'kirby';
      left = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
      right = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      jump = [10];
      break;
    case controller === 2:
      x = 400;
      y = game.world.height - 150;
      character = 'pikachu';
      left = [0, 1, 2];
      right = [6, 7, 8];
      jump = [4];
      break;
    case controller === 3:
      x = 500;
      y = game.world.height - 150;
      character = 'mario';
      break;
  }
  // Controller is the index of input array where this chars inputs are stored.
  this.controller = controller;

  // Sprites
  this.sprite = game.add.sprite(x, y, character + (this.controller));
  this.sprite.animations.add('left', left, 13, true);
  this.sprite.animations.add('right', right, 13, true);
  this.sprite.animations.add('jump', jump, 13, true);

  // Enable physics
  game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
  this.sprite.collideWorldBounds = true;
  this.sprite.playerId = this.controller;
  this.sprite.body.bounce.y = 0.2;
  this.sprite.body.gravity.y = 300;
}

Character.prototype = {
  update: function () {
    this.physics.arcade.collide(this.sprite, this.platforms);
    var standing = this.sprite.body.blocked.down || this.sprite.body.touching.down;
    this.sprite.body.velocity.x = 0;
  }
}
