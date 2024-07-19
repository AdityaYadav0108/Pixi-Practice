let app;
let player;
let enemy;
let flag = true;

window.onload = async function () {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xaaaaaa,
  });

  document.body.appendChild(app.view);

  PIXI.Assets.addBundle("contestants", {
    player: "../images/player.png",
    enemy: "../images/enemy.png",
  });

  let contestants = await PIXI.Assets.loadBundle("contestants");
  createSpriteFromAssets(contestants);
  setSprites();

  const ticker = new PIXI.Ticker();
  ticker.add(gameloop);
  ticker.start();
};

function createSpriteFromAssets(assets) {
  player = new PIXI.Sprite(assets.player);
  enemy = new PIXI.Sprite(assets.enemy);
}

function setSprites() {
  app.stage.addChild(player);
  player.anchor.set(0.5);
  player.x = 0 + player.width / 2;
  player.y = app.view.height / 2;

  app.stage.addChild(enemy);
  enemy.anchor.set(0.5);
  enemy.x = app.view.width - enemy.width / 2;
  enemy.y = app.view.height / 2;
}

function gameloop() {
  detectCollision();
  movePlayers(flag);
}

function detectCollision() {
  if (
    player.x <= 0 + player.width / 2 ||
    enemy.x >= app.view.width - enemy.width / 2
  ) {
    flag = true;
  }
  if (player.x + player.width / 2 >= enemy.x - enemy.width / 2) {
    flag = false;
  }
}

function movePlayers() {
  if (flag) {
    player.x += 10;
    enemy.x -= 10;
  } else {
    player.x -= 10;
    enemy.x += 10;
  }
}
