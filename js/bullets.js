let app;
let player;
let bullets = [];
let bulletSpeed = 4;
let gameDiv = document.querySelector("#gameDiv");

window.onload = async () => {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xaaaaaa,
  });

  gameDiv.appendChild(app.view);

  let playerTexture = await PIXI.Assets.load("../images/player.png");
  player = new PIXI.Sprite(playerTexture);
  player.anchor.set(0.5);
  player.x = app.view.width / 2;
  player.y = app.view.height / 2;
  app.stage.addChild(player);

  gameDiv.addEventListener("pointerdown", fireBullet);

  let ticker = new PIXI.Ticker();
  ticker.add(gameLoop1);
  ticker.start();
};

function fireBullet() {
  console.log("fire!");

  let bullet = createBullet();
  bullets.push(bullet);
}

function createBullet() {
  let texture = PIXI.Texture.from("../images/bullet.png");
  let bullet = new PIXI.Sprite(texture);
  bullet.anchor.set(0.5);
  bullet.x = player.x;
  bullet.y = player.y;
  bullet.speed = bulletSpeed;
  app.stage.addChild(bullet);
  return bullet;
}

function updateBullet(delta) {
  for (bullet of bullets) {
    if (bullet.dead) {
      app.stage.removeChild(bullet);
      bullets.splice(bullets.indexOf(bullet), 1);
    }
    bullet.position.x += bullet.speed;
    if(bullet.x === app.view.width){
      bullet.dead = true;
    }
  }
}

function gameLoop1(delta) {
  updateBullet(delta);
}

