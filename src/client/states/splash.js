function Splash() {}

Splash.prototype = {
    loadScripts: function () {
      game.load.script('WebFont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js');
      game.load.script('menu', 'states/menu.js');
      game.load.script('game', 'states/game.js');
      game.load.script('gameover', 'states/gameover.js');
    },
    loadAssets: function () {
      // Map assets
      game.load.image('sky', 'assets/marioLevel/MarioLevelBackground.png');
      game.load.image('ground', 'assets/marioLevel/ground.png');
      game.load.image('move-box', 'assets/marioLevel/box.png')
  		game.load.image('box', 'assets/marioLevel/ledge2.png');
  		game.load.image('littlebox', 'assets/marioLevel/box.png');
  		game.load.image('pipe', 'assets/marioLevel/pipe2.png');

      // Menu Assets
      game.load.image('menu', 'assets/main_background.png');

      // Sprite Bullets
      game.load.image('bullet0', 'assets/weapons/bullet0.png')
      game.load.image('bullet1', 'assets/weapons/bullet1.png')
      game.load.image('bullet2', 'assets/weapons/bullet2.png')
      game.load.image('bullet3', 'assets/weapons/bullet3.png')

      // Sprites
      game.load.spritesheet('megaman0', 'assets/sprites/MegamanNew1.png', 50, 48);
      game.load.spritesheet('kirby1', 'assets/sprites/kirbySprite2.png', 23, 22);
      game.load.spritesheet('pikachu2', 'assets/sprites/pikachuSprite2.png', 40, 30);
      game.load.spritesheet('mario3', 'assets/sprites/mario1.png', 24, 38);

    },
    loadFonts: function () {
      WebFontConfig = {
            custom: {
                families: ['PressStart2P', 'Mario'],
                urls: ['assets/css/fonts.css']
            }
        };
    },
    init: function() {
      this.status = game.make.text(game.world.centerX, 380, 'Loading...', {
        fill: 'blue',
        font: '40px Mario'});
      this.status.anchor.setTo(0.5);
    },
    preload: function() {

      game.add.sprite(0, 0, 'load-bg');
      game.add.existing(this.status);

      this.loadScripts();
      this.loadAssets();
      this.loadFonts();
    },
    addGameStates: function() {
      game.state.add('Menu', Menu)
      game.state.add('Game', Game);
      game.state.add('GameOver', GameOver);
    },
    create: function () {
      this.addGameStates();
      this.status.setText('Loading...')

      // this.status.setText('Loaded!');

      setTimeout(function() {
        game.state.start('Menu');
      }, 1000);
    }
};
