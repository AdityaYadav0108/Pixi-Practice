let app;
let playerSheet = {};

window.onload = async () => {
  app = new PIXI.Application({
    resizeTo: window,
    background: "#1099bb",
  });

  document.body.appendChild(app.view);

  PIXI.Assets.addBundle("playerSprites", {
    playerRight: "../images/player/Actor1_right.png",
    playerLeft: "../images/player/Actor1_left.png",
    playerFront: "../images/player/Actor1_front.png",
    playerBack: "../images/player/Actor1_back.png",
  });

  await PIXI.Assets.loadBundle("playerSprites")
  .then(() => doneLoading());
};

function doneLoading() {
  let rightSheet = new PIXI.BaseTexture.from("../images/player/Actor1_right.png");
  let leftSheet = new PIXI.BaseTexture.from("../images/player/Actor1_left.png");
  let frontSheet = new PIXI.BaseTexture.from("../images/player/Actor1_front.png");
  let backSheet = new PIXI.BaseTexture.from("../images/player/Actor1_back.png");
}
