let app = new PIXI.Application({
  resizeTo: window,
  background: "#1099bb",
});

document.body.appendChild(app.view);
let directions = ["left", "right", "back", "front"];
let animatedSprites = {};
let keysPressed = {};
let sprite;

(async () => {
  const backSheetTexture = await PIXI.Assets.load("../images/player/back.png");
  PIXI.Assets.add({
    alias: "backAsset",
    src: "../images/player/back.json",
    data: { texture: backSheetTexture },
  });
  const backSheet = await PIXI.Assets.load("backAsset");
  const backAnimatedSprite = new PIXI.AnimatedSprite(
    backSheet.animations["go-back"]
  );
  animatedSprites.back = backAnimatedSprite;

  const frontSheetTexture = await PIXI.Assets.load(
    "../images/player/front.png"
  );
  PIXI.Assets.add({
    alias: "frontAsset",
    src: "../images/player/front.json",
    data: { texture: frontSheetTexture },
  });
  const frontSheet = await PIXI.Assets.load("frontAsset");
  const frontAnimatedSprite = new PIXI.AnimatedSprite(
    frontSheet.animations["go-front"]
  );
  animatedSprites.front = frontAnimatedSprite;

  const leftSheetTexture = await PIXI.Assets.load("../images/player/left.png");
  PIXI.Assets.add({
    alias: "leftAsset",
    src: "../images/player/left.json",
    data: { texture: leftSheetTexture },
  });
  const leftSheet = await PIXI.Assets.load("leftAsset");
  const leftAnimatedSprite = new PIXI.AnimatedSprite(
    leftSheet.animations["go-left"]
  );
  animatedSprites.left = leftAnimatedSprite;

  const rightSheetTexture = await PIXI.Assets.load(
    "../images/player/right.png"
  );
  PIXI.Assets.add({
    alias: "rightAsset",
    src: "../images/player/right.json",
    data: { texture: rightSheetTexture },
  });
  const rightSheet = await PIXI.Assets.load("rightAsset");
  const rightAnimatedSprite = new PIXI.AnimatedSprite(
    rightSheet.animations["go-right"]
  );
  animatedSprites.right = rightAnimatedSprite;
})();

app.ticker.add(gameloop);
app.ticker.start;
document.addEventListener("keydown", keyPressed);
document.addEventListener("keyup", keyReleased);

function gameloop() {
  movePlayer();
}

function keyPressed(e) {
  keysPressed[e.key] = true;
}
function keyReleased(e) {
  keysPressed[e.key] = false;
}
function movePlayer() {
  if (keysPressed["w"]) {
    sprite = animatedSprites["back"];
    sprite.play();
  }
  if (keysPressed["a"]) {
  }
  if (keysPressed["s"]) {
  }
  if (keysPressed["d"]) {
  }
}
