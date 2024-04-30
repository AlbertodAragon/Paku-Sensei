import {
  ENEMY_SPEED,
  HERO_SPEED,
  SPEED_BULLET,
  RATIO_BULLET,
} from "../contants/constants";
import { projectile } from "../objects/weapons";

export const getCloserEnemy = (playerPos) => {
  var allEnemies = get("dangerous");

  var allEnemiesPosition = allEnemies.map(({ pos }) => pos);

  var goal = playerPos.x;

  var closestEnemy = allEnemiesPosition.reduce((prev, curr) => {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });

  console.log("closest", closestEnemy);
  console.log("goal", goal);

  projectile(playerPos, closestEnemy, SPEED_BULLET);
};
