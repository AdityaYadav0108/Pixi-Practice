let app;
let player;

window.onload = async function () {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xaaaaaa,
  });

  document.body.appendChild(app.view);

  //Loading a singular Asset
  let playerTexture = await PIXI.Assets.load("../images/player.png");
  player = new PIXI.Sprite(playerTexture);
  player.anchor.set(0.5);
  player.x = app.screen.width/2;
  player.y = app.screen.height/2;
  app.stage.addChild(player);
  console.log(player);

  //Loading multiple assets in the form of a bundle
  PIXI.Assets.addBundle("bloats", {
    bloat01: "../images/bloat01.png",
    bloat02: "../images/bloat02.png",
    bloat03: "../images/bloat03.png",
    bloat04: "../images/bloat04.png",
    bloat05: "../images/bloat05.png",
    bloat06: "../images/bloat06.png",
    bloat07: "../images/bloat07.png",
    bloat08: "../images/bloat08.png",
    bloat09: "../images/bloat09.png",
    bloat10: "../images/bloat10.png",
  });

  //loading the assets
  const assets = await PIXI.Assets.loadBundle("bloats");
  console.log(assets);

  //converting the texture assets to sprites
  addBloats(assets);
};

function addBloats(assets){
  for (asset in assets) {
    let sprite = new PIXI.Sprite(assets[asset]);
    app.stage.addChild(sprite);
  }
}

// async function assetCreator(path) {
//   let texture = await PIXI.Assets.load(path);
//   return new PIXI.Sprite(texture);
// }
