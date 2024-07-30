let app;

(async () => {
  app = new PIXI.Application({
    resizeTo: window,
    background: "#1099bb",
  });

  document.body.appendChild(app.view);

  const sheetTexture = await PIXI.Assets.load(
    "../images/player/player_back/player_back.png"
  );
  PIXI.Assets.add({
    alias: "player_back",
    src: "../images/player/player_back/player_back.json",
    data: { texture: sheetTexture }, // using of preloaded texture
  });
  const sheet = await PIXI.Assets.load("player_back");

  const animatedSprite = new PIXI.AnimatedSprite(
    sheet.animations["player_back"]
  );
  animatedSprite.x = app.screen.width / 2;
  animatedSprite.y = app.screen.height / 2;
  animatedSprite.anchor.set(0.5);
  animatedSprite.play();
  animatedSprite.animationSpeed = 0.1;
  app.stage.addChild(animatedSprite);
})();