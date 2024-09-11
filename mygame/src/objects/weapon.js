import {
  ENEMY_SPEED,
  HERO_SPEED,
  SPEED_BULLET,
  RATIO_BULLET,
} from "../contants/constants";

export const weaponPlayer = [
  pos(-9, 15),
  sprite("rifle"),
  area({ scale: 0.1 }),
  scale(0.8),
  body(),
  "weapon",
];
