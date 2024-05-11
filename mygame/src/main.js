import k from "./kaboom";
import { loadSprites, loadSounds } from "./hooks/loadSprites.js";
import { maps, levelCfg } from "./maps/maps.js";
import { playerHero, playerLogic } from "./objects/player.js";
import { spawnDemons, enemyLogic } from "./objects/enemy.js";
import { weaponPlayer } from "./objects/weapon.js";
import { movement } from "./hooks/keys.js";
import { getCloserEnemy } from "./hooks/closestEnemy";
import { leveText } from "./hooks/texts.js";
import {
  ENEMY_SPEED,
  HERO_SPEED,
  SPEED_BULLET,
  RATIO_BULLET,
} from "../src/contants/constants";

loadSprites();
loadSounds();
k.scene("game", ({ level, score }) => {
  add([sprite("bg-tau")]);

  addLevel(maps[level], levelCfg);

  const player = add(playerHero);
  const weapon = player.add(weaponPlayer);
  movement(player, weapon);
  playerLogic(player, score);

  spawnDemons(player);
  enemyLogic(player);

  player.pos &&
    setInterval(() => {
      getCloserEnemy(player.pos);
    }, RATIO_BULLET);

  leveText(level);
});

scene("lose", ({ score }) => {
  add([text(score, 32), pos(width() / 2, height() / 2)]);
});

go("game", { level: 0, score: 0 });
