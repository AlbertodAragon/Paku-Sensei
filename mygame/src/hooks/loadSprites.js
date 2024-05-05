export const loadSprites = () => {
  loadRoot("/sprites/");
  loadSprite("left-wall", "rfDoaa1.png");
  loadSprite("top-wall", "QA257Bj.png");
  loadSprite("bottom-wall", "vWJWmvb.png");
  loadSprite("right-wall", "SmHhgUn.png");
  loadSprite("bottom-left-wall", "awnTfNC.png");
  loadSprite("bottom-right-wall", "84oyTFy.png");
  loadSprite("top-left-wall", "xlpUxIm.png");
  loadSprite("top-right-wall", "z0OmBd1.jpg");
  loadSprite("top-door", "U9nre4n.png");
  loadSprite("fire-pot", "I7xSp7w.png");
  loadSprite("left-door", "okdJNls.png");
  loadSprite("lanterns", "wiSiY09.png");
  loadSprite("slicer", "c6JFi5Z.png");
  loadSprite("skeletor", "Ei1VnX8.png");
  loadSprite("kaboom", "o9WizfI.png");
  loadSprite("stairs", "VghkL08.png");
  loadSprite("bg", "u4DVsx6.png");
  loadSprite("bg2", "try_bg.png");
  loadSprite("bg-tau", "background-tau.png");
  loadSprite("tau-right", "tau-right.png");
  loadSprite("tau-left", "tau-left.png");
  loadSprite("bullet", "bullet.png");
  loadSprite("rock", "rock.png");

  loadSpriteAtlas("hero_sprites.png", {
    hero: {
      x: 0,
      y: 0,
      width: 470,
      height: 58,
      sliceX: 9,
      anims: {
        idle: 7,
        walk: { from: 0, to: 7, loop: true },
      },
    },
  });
};

export const loadSounds = () => {
  loadSound("shoot", "bullet-sound.mp3");
};
