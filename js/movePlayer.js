const pathTemplate = "../images/player/";
let animatedSprites = [];
let app;
let keysPressed = {};
let currentSprite;
let currentPosi = {};


window.onload = async () => {
  app = new PIXI.Application({
    resizeTo: window,
    background: "#1099bb",
  });

  document.body.appendChild(app.view);

  currentPosi.x = app.screen.width/2;
  currentPosi.y = app.screen.height/2;

  const leftAnimatedSprite = await createAnimatedSprite(
    `${pathTemplate}left.png`,
    `${pathTemplate}left.json`,
    "left"
  );

  animatedSprites.push(leftAnimatedSprite);

  const rightAnimatedSprite = await createAnimatedSprite(
    `${pathTemplate}right.png`,
    `${pathTemplate}right.json`,
    "right"
  );

  animatedSprites.push(rightAnimatedSprite);

  const frontAnimatedSprite = await createAnimatedSprite(
    `${pathTemplate}front.png`,
    `${pathTemplate}front.json`,
    "front"
  );

  animatedSprites.push(frontAnimatedSprite);

  const backAnimatedSprite = await createAnimatedSprite(
    `${pathTemplate}back.png`,
    `${pathTemplate}back.json`,
    "back"
  );

  animatedSprites.push(backAnimatedSprite);
  currentSprite = animatedSprites[2];
  currentSprite.x = currentPosi.x;
  currentSprite.y = currentPosi.y;
  app.stage.addChild(currentSprite);

  window.addEventListener("keydown", keyPressed);
  window.addEventListener("keyup", keyReleased);

  app.ticker.add(gameloop);
};

function keyPressed(e) {
  keysPressed[e.key] = true;
}
function keyReleased(e) {
  keysPressed[e.key] = false;
}

function gameloop(){
  let flag = true;
  if (keysPressed["w"]) {
    flag = false;
    currentSprite = animatedSprites[3];
    currentPosi.y -= 2;
  }
  if (keysPressed["s"]) {
    flag = false;
    currentSprite = animatedSprites[2];
    currentPosi.y +=2;
  }
  if (keysPressed["a"]) {
    flag = false;
    currentSprite = animatedSprites[0];
    currentPosi.x -= 2;
  }
  if (keysPressed["d"]) {
    flag = false;
    currentSprite = animatedSprites[1];
    currentPosi.x += 2;
  }
  if(flag){
    currentSprite.stop()
    return;
  }
  app.stage.removeChildren();
  currentSprite.x = currentPosi.x;
  currentSprite.y = currentPosi.y;
  currentSprite.play();
  app.stage.addChild(currentSprite);
}

async function createAnimatedSprite(imgPath, jsonPath, orientation) {
  const sheetTexture = await PIXI.Assets.load(imgPath);
  PIXI.Assets.add({
    alias: `${orientation}Asset`,
    src: jsonPath,
    data: {
      texture: sheetTexture,
    },
  });

  const sheet = await PIXI.Assets.load(`${orientation}Asset`);
  const animatedSprite = new PIXI.AnimatedSprite(
    sheet.animations[`go-${orientation}`]
  );
  
  animatedSprite.anchor.set(0.5);
  animatedSprite.animationSpeed = 0.1
  return animatedSprite;
}
