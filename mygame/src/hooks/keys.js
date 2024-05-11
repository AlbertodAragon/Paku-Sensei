import { HERO_SPEED } from "../contants/constants";
import { meleeAttack } from "../objects/attacks.js";

export const movement = (player, weapon) => {
  onKeyRelease(() => {
    player.play("idle");
  });

  onKeyDown("a", () => {
    if (player.curAnim() !== "walk") {
      player.play("walk");
    }
    player.flipX = false;
    weapon.flipX = false;
    player.move(-HERO_SPEED, 0);
    player.dir = vec2(-1, 0);
  });

  onKeyDown("d", () => {
    if (player.curAnim() !== "walk") {
      player.play("walk");
    }
    player.move(HERO_SPEED, 0);
    player.flipX = true;
    weapon.flipX = true;
    player.dir = vec2(1, 0);
  });

  onKeyDown("w", () => {
    if (player.curAnim() !== "walk") {
      player.play("walk");
    }
    player.move(0, -HERO_SPEED);
    player.dir = vec2(0, -1);
  });

  onKeyDown("s", () => {
    if (player.curAnim() !== "walk") {
      player.play("walk");
    }
    player.move(0, HERO_SPEED);
    player.dir = vec2(0, 1);
  });

  onKeyPress("space", () => {
    meleeAttack(player.pos.add(player.dir.scale(32)));
  });
};
