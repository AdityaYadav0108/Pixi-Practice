let app;
let player;

window.onload = () => {
  //App initialization
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xaaaaaa
  })
  document.body.appendChild(app.view)

  //Sprite setup
  const texture = PIXI.Texture.from('../images/player.png');
  player = new PIXI.Sprite(texture);
  player.anchor.set(0.5);
  player.x = app.view.width/2;
  player.y = app.view.height/2;

  app.stage.addChild(player);

  //Mouse Interactivity

  app.stage.interactive = true;
  app.stage.on('pointermove', playerMoveWithMouse);
  app.stage.hitArea = app.screen;
}

function playerMoveWithMouse(e){
  let pos = e.data.global;

  player.x = pos.x;
  player.y = pos.y;
}