import { ENEMY_SPEED, HERO_SPEED, SPEED_BULLET } from "../contants/constants";
import { projectile } from "./weapons";

let i = 0;

const getCloserEnemy = (allEnemiesPosition, playerPos) => {
  console.log(playerPos);
};

const getEnemies = (player) => {
  const allEnemies = get("dangerous");

  const allEnemiesPosition = allEnemies.map(({ pos }) => pos);
  console.log("enemyPos", allEnemiesPosition);

  getCloserEnemy(allEnemiesPosition, player.pos);
};

export const spawnDemons = () => {
  add([
    pos(
      Math.trunc(Math.random() * (700 - 80) + 80),
      Math.trunc(Math.random() * (700 - 100) + 100)
    ),
    sprite("skeletor"),
    area({ scale: 0.8 }),
    body({ isStatic: false }),
    health(1),
    "dangerous",
    state("idle", ["idle", "attack", "move"]),
  ]);

  while (i < 4) {
    wait(rand(0), spawnDemons);
    i++;
    // if (i === 4) {
    //   console.log("i", i);
    //   wait(1, () => {
    //     getEnemies();
    //   });
    // }
  }
};

export const enemyLogic = (player) => {
  wait(1, () => {
    getEnemies(player);
  });
  onUpdate("dangerous", (skeletor) => {
    // skeletor.moveTo(player.pos.x, player.pos.y, ENEMY_SPEED);
    // projectile(player, skeletor, SPEED_BULLET);
  });
};
