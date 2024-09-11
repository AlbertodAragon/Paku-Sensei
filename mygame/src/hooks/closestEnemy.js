import {
  ENEMY_SPEED,
  HERO_SPEED,
  SPEED_BULLET,
  RATIO_BULLET,
} from "../contants/constants";
import { projectile } from "../objects/attacks";

export const getCloserEnemy = (playerPos) => {
  const allEnemies = get("dangerous");

  const allEnemiesPosition = allEnemies.map(({ pos }) => pos);

  const goal = playerPos.x;

  const closestEnemy = allEnemiesPosition?.reduce((prev, curr) => {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });

  console.log("closest", closestEnemy);
  console.log("goal", goal);

  projectile(playerPos, closestEnemy, SPEED_BULLET);
};
