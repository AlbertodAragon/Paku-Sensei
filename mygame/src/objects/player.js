import { projectile } from "./weapons";
import {
  ENEMY_SPEED,
  HERO_SPEED,
  SPEED_BULLET,
  RATIO_BULLET,
} from "../contants/constants";

export const playerHero = [
  sprite("hero"),
  pos(450, 350),
  health(3),
  area({ scale: 0.9 }), // has a collider
  body({ isStatic: false }),
  "player",
  "friendly",
  "hero",
  {
    // right by default
    dir: vec2(-0.5, 0),
  },
  state("idle", ["idle", "attack", "move"]),
  scale(1),
  // flipX(false),
];

export const playerLogic = (player, scoreLabel) => {
  player.play("idle");

  player.onCollide("dangerous", () => {
    player.hurt(1);
    player.hp() === 0 && destroy(player);
    // go("lose");
  });

  const playerBar = add([
    text("health " + player.hp()),
    { value: player.hp() },
    pos(100, 550),
    scale(1),
  ]);

  player.onUpdate(() => {
    camPos(player.pos);
    playerBar.text = "health " + player.hp();
  });
};
