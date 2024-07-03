let app;
let player;
let enemy;

window.onload = async () => {
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

  createSpritesFromBundles(contestants);
  setPositionOfContestants();

  const ticker = new PIXI.Ticker();
  ticker.add(gameLoop);
  ticker.start();
};

async function createSpritesFromBundles(assets) {
  player = new PIXI.Sprite(assets.player);
  enemy = new PIXI.Sprite(assets.enemy);
}
function setPositionOfContestants() {
  app.stage.addChild(player);
  player.anchor.set(0.5);
  player.x = 0 + player.width/2;
  player.y = app.view.height / 2;

  app.stage.addChild(enemy);
  enemy.anchor.set(0.5);
  enemy.x = app.view.width - enemy.width/2;
  enemy.y = app.view.height / 2;
}

function gameLoop() {
  let flag;
  if(player.x <= 0 + player.width/2 || enemy.x >= app.view.width - enemy.width/2){
    flag = true;
    // player.x += 5;
    // enemy.x -= 5;
  }else if(player.x + player.width/2 >= enemy.x - enemy.width/2){
    flag = false;
  //   player.x -= 5;
  //   enemy.x += 5
  }

  if(flag){
    
  }
  
}
function moveContestants(){
  if(flag){
    console.log('hi')
    player.x += 5;
    enemy.x -= 5;
  }else{
  player.x -= 5;
    enemy.x += 5
  }
}
