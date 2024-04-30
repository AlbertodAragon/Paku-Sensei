import k from "./kaboom";
import { loadSprites } from "./hooks/loadSprites.js";
import { maps, levelCfg } from "./maps/maps.js";
import { playerHero, playerLogic } from "./objects/player.js";
import { spawnDemons, enemyLogic } from "./objects/enemy.js";
import { movement } from "./hooks/keys.js";
import { getCloserEnemy } from "./hooks/closestEnemy";
import {
  ENEMY_SPEED,
  HERO_SPEED,
  SPEED_BULLET,
  RATIO_BULLET,
} from "../src/contants/constants";

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
  movement(player);
  playerLogic(player, score);

  spawnDemons(player);
  enemyLogic(player);

  player.pos &&
    setInterval(() => {
      getCloserEnemy(player.pos);
    }, RATIO_BULLET);

  // player.onCollide("door", (d) => {
  //   destroy(d);
  // });

  // onUpdate("slicer", (s) => {
  //   s.move(s.dir * SLICER_SPEED, 0);
  // });

  // onCollide("slicer", "wall", (s) => {
  //   s.dir = -s.dir;
  // });

  // player.onCollide("dangerous", () => {
  //   player.hurt(1);
  // });

  // enemy.onCollide("kaboom", () => {
  //   shake(4);
  //   enemy.hurt(1);
  // });

  // enemy.on("death", () => {
  //   destroy(enemy);
  // });

  // player.on("death", () => {
  //   destroy(player);
  //   go("lose", { score: scoreLabel.value });
  // });

  add([text("level " + parseInt(level + 1)), pos(450, 485), scale(2)]);
});

scene("lose", ({ score }) => {
  add([text(score, 32), pos(width() / 2, height() / 2)]);
});

go("game", { level: 0, score: 0 });
