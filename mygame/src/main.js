import kaboom from "kaboom";
import { loadSprites } from "./hooks/loadSprites.js";
import { maps } from "./maps/maps.js";

import {
  MOVE_SPEED,
  SLICER_SPEED,
  SKELETOR_SPEED,
} from "../src/contants/constants";

kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  clearColor: [0, 0, 0, 1],
});

loadSprites();
scene("game", ({ level, score }) => {
  add([sprite("bg")]);
  

  const levelCfg = {
    tileWidth: 48,
    tileHeight: 48,
    tiles: {
      a: () => [sprite("left-wall"), area({ scale: 0.9 }), body({ isStatic: true }), "wall"],
      b: () => [sprite("right-wall"), area({ scale: 0.9 }), body({ isStatic: true }), "wall"],
      c: () => [sprite("top-wall"), area({ scale: 0.9 }), body({ isStatic: true }), "wall"],
      d: () => [
        sprite("bottom-wall"),
        area(),
        body({ isStatic: true }),
        "wall",
      ],
      w: () => [
        sprite("top-right-wall"),
        area(),
        body({ isStatic: true }),
        "wall",
      ],
      x: () => [
        sprite("bottom-left-wall"),
        area(),
        body({ isStatic: true }),
        "wall",
      ],
      y: () => [
        sprite("top-left-wall"),
        area(),
        body({ isStatic: true }),
        "wall",
      ],
      z: () => [
        sprite("bottom-right-wall"),
        area(),
        body({ isStatic: true }),
        "wall",
      ],
      "%": () => [
        sprite("left-door"),
        area(),
        body({ isStatic: true }),
        "door",
      ],
      9: () => [sprite("top-door"), area(), "next-level"],
      $: () => [sprite("stairs"), area(), "next-level"],
      "-": () => [sprite("slicer"), area({ scale: 0.9 }), "slicer",{ dir: -1 }, "dangerous"],
      s: () => [
        sprite("skeletor"),
        area(),
        "dangerous",
        "skeletor",
        { dir: -1, timer: 0 },
      ],
      ")": () => [sprite("lanterns"), area({ scale: 0.9 }), body({ isStatic: true }), "wall"],
      "(": () => [sprite("fire-pot"), area({ scale: 0.9 }), body({ isStatic: true }), "wall"],
    },
  };

  addLevel(maps[level], levelCfg);

  const scoreLabel = add([
    text("0"),
    pos(400, 450),
    {
      value: score,
    },
    scale(2),
  ]);

  add([text("level " + parseInt(level + 1)), pos(450, 485), scale(2)]);

  const player = add([
    sprite("crisis-left"),
    pos(5, 190),
    area({scale: 0.9}), // has a collider
    body({ isStatic: false }),
    "player",
    "friendly",
    {
      // right by default
      dir: vec2(1, 0),
    },
  ]);
  // camera follows player
  
  const enemy = add([
    pos(80, 100),
    sprite("skeletor"),
    area({scale: 0.9}), // has a collider
    body({ isStatic: false }),
    state("idle", ["idle", "attack", "move"]),
    
    // follow(player, 100)
])
player.onUpdate(() => {
  camPos(player.pos);
  // enemy.move(SKELETOR_SPEED, player.pos.x);
  enemy.moveTo(player.pos.x, player.pos.y, SKELETOR_SPEED);
  console.log(player.pos.x)
  console.log(player.pos.y)
})


  player.onCollide("next-level", () => {
    go("game", {
      level: (level + 1) % maps.length,
      score: scoreLabel.value,
    });
  });

  onKeyDown("left", () => {
    player.use(sprite("link-going-left"));
    player.move(-MOVE_SPEED, 0);
    player.dir = vec2(-1, 0);
  });

  onKeyDown("right", () => {
    player.use(sprite("link-going-right"));
    player.move(MOVE_SPEED, 0);
    player.dir = vec2(1, 0);
  });

  onKeyDown("up", () => {
    player.use(sprite("link-going-up"));
    player.move(0, -MOVE_SPEED);
    player.dir = vec2(0, -1);
  });

  onKeyDown("down", () => {
    player.use(sprite("link-going-down"));
    player.move(0, MOVE_SPEED);
    player.dir = vec2(0, 1);
  });

  function spawnKaboom(p) {
    const obj = add([sprite("kaboom"), area(), pos(p), "kaboom"]);
    wait(0.2, () => {
      destroy(obj);
    });
  }

  onKeyPress("space", () => {
    spawnKaboom(player.pos.add(player.dir.scale(48)));
  });

  player.onCollide("door", (d) => {
    destroy(d);
  });

  onCollide("kaboom", "skeletor", (k, s) => {
    shake(4);
    wait(1, () => {
      destroy(k);
    });
    destroy(s);
    scoreLabel.value++;
    scoreLabel.text = scoreLabel.value;
  });

  onUpdate("slicer", (s) => {
    s.move(s.dir * SLICER_SPEED, 0);
  });

  onCollide("slicer", "wall", (s) => {
    s.dir = -s.dir;
  });

  onUpdate("skeletor", (s) => {
    s.move(0, s.dir * SKELETOR_SPEED); 
    // follow(player,  SKELETOR_SPEED);
    // s.timer -= dt();
    // if (s.timer <= 0) {
    //   s.dir = -s.dir;
    //   s.timer = rand(5);
    // }
  });

  onCollide("skeletor", "wall", (s) => {
    s.dir = -s.dir;
  });

  player.onCollide("dangerous", () => {
    go("lose", { score: scoreLabel.value });
  });
});

scene("lose", ({ score }) => {
  add([text(score, 32), pos(width() / 2, height() / 2)]);
});

go("game", { level: 0, score: 0 });
