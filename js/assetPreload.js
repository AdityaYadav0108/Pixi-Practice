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
  player = await assetCreator("../images/player.png");
  console.log(player);
  app.stage.addChild(player);


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

  



};

async function assetCreator(path) {
  let texture = await PIXI.Assets.load(path);
  return new PIXI.Sprite(texture);
}
