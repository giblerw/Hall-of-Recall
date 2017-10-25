var game = new Phaser.Game(1150, 600, Phaser.AUTO, 'game', {
  preload: preload,
  create: create,
  update: update
});

function preload() {
  game.load.tilemap('hRecall_map', 'hRecall_map.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('tiles', '/assets/castle_tileset_part1.png');
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  map = game.add.tilemap('hRecall_map');
  map.addTilesetImage('castle', 'tiles');
  bgLayer = map.createLayer('bgLayer');
  collisionLayer = map.createLayer('collisionLayer');
  reliefLayer = map.createLayer('reliefLayer')


  player = game.add.sprite(100, game.world.height - 550, 'dude');
  game.physics.arcade.enable(player);
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;
  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);
}

function update() {
  cursors = game.input.keyboard.createCursorKeys();
  player.body.velocity.x = 0;

  if (cursors.left.isDown) {
    player.animations.play('left');
  } else if (cursors.right.isDown) {
    player.animations.play('right');
  } else {
    player.animations.stop();
    player.frame = 4;
  }

  if (cursors.left.isDown) {
    player.body.velocity.x = -150;
  }
  if (cursors.right.isDown) {
    player.body.velocity.x = 150;
  }
// Define hitPlatform DO ET
  if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
    player.body.velocity.y = -350;
  }
}
