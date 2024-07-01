let app;
let player;
let keys = {};

window.onload = () => {
  //app initialization

  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xaaaaaa,
  });

  document.body.appendChild(app.view);

  //Sprite setup
  const texture = PIXI.Texture.from("../images/player.png");
  player = new PIXI.Sprite(texture);
  player.anchor.set(0.5);
  player.x = app.view.width / 2;
  player.y = app.view.height / 2;

  app.stage.addChild(player);

  //Keyboard Interactivity
  app.stage.interactive = true;
  window.addEventListener('keydown', keyDown);
  window.addEventListener('keyup', keyUp);

  const ticker = new PIXI.Ticker();
  ticker.add(gameLoop);
  ticker.start();
};


function keyUp(e){
  keys[e.key] = false;
}

function keyDown(e){
  keys[e.key] = true;
}

function gameLoop(e) {
  if(keys["w"]){
    player.y -= 5;
  }
  if(keys["a"]){
    player.x -= 5;
  }
  if(keys["s"]){
    player.y += 5;
  }
  if(keys["d"]){
    player.x += 5;
  }
}
