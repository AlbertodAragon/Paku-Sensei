import k from "./kaboom";
import { loadSprites } from "./hooks/loadSprites.js";
import { maps, levelCfg } from "./maps/maps.js";
import { playerHero } from "./objects/player.js";
import { enemies } from "./objects/enemy.js";
import { projectile } from "./objects/projectile.js";
import { movement } from "./hooks/keys.js";

import { ENEMY_SPEED, HERO_SPEED, SPEED_BULLET } from "../src/contants/constants";

loadSprites();
k.scene("game", ({ level, score }) => {
  add([sprite("bg2")]);

  addLevel(maps[level], levelCfg);

  const scoreLabel = add([
    text("0"),
    // pos(400, 450),
    {
      value: score,
    },
    scale(2),
  ]);

  const player = add(playerHero);

  player.play("idle");

  //   player.action( () =>{

  //   const left = onKeyDown("left");
  //   const right = onKeyDown("right");
  //   const up = onKeyDown("up");
  //   const down = onKeyDown("down");

  //   if (left)
  //   {
  //     player.play('walk');
  //     player.flipX(true);
  //     player.pos.x -= HERO_SPEED
  //   }
  // });

  const enemy = add(enemies);

 

  const playerBar = add([
    text("health " + player.hp()),
    { value: player.hp() },
    pos(100, 550),
    scale(1),
  ]);

  player.onUpdate(() => {
    camPos(player.pos);
    playerBar.text = "health " + player.hp();

    // enemy.moveTo(player.pos.x, player.pos.y, ENEMY_SPEED);
  });

  // player.onCollide("next-level", () => {
  //   go("game", {
  //     level: (level + 1) % maps.length,
  //     score: scoreLabel.value,
  //   });
  // });

  function spawnKaboom(p) {
    const obj = add([sprite("kaboom"), area(), pos(p), "kaboom"]);
    wait(0.2, () => {
      destroy(obj);
    });
  }

  onKeyPress("space", () => {
    // spawnKaboom(player.pos.add(player.dir.scale(48)));
    projectile(player, enemy, SPEED_BULLET)
  });

  // player.onCollide("door", (d) => {
  //   destroy(d);
  // });

  // onUpdate("slicer", (s) => {
  //   s.move(s.dir * SLICER_SPEED, 0);
  // });

  // onCollide("slicer", "wall", (s) => {
  //   s.dir = -s.dir;
  // });

  player.onCollide("dangerous", () => {
    player.hurt(1);
  });

  enemy.onCollide("kaboom", () => {
    shake(4);
    enemy.hurt(1);
  });

  enemy.on("death", () => {
    destroy(enemy);
  });

  player.on("death", () => {
    destroy(player);
    go("lose", { score: scoreLabel.value });
  });

  add([text("level " + parseInt(level + 1)), pos(450, 485), scale(2)]);

  movement(player);
});

scene("lose", ({ score }) => {
  add([text(score, 32), pos(width() / 2, height() / 2)]);
});

go("game", { level: 0, score: 0 });
