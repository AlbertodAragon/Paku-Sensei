import { HERO_SPEED } from "../contants/constants";

export const movement = (player) => {
  // const animation = player.curAnim();
  onKeyRelease(() => {
    player.play("idle");
  });
  onKeyDown("left", () => {
    if (player.curAnim() !== "walk") {
      player.play("walk");
    }
    player.flipX = false;
    // console.log("animation", animation);
    player.move(-HERO_SPEED, 0);
    // player.flipX(false);
    player.dir = vec2(-1, 0);
  });

  onKeyDown("right", () => {
    if (player.curAnim() !== "walk") {
      player.play("walk");
    }
    player.move(HERO_SPEED, 0);
    player.flipX = true;
    player.dir = vec2(1, 0);
  });

  onKeyDown("up", () => {
    // player.use(sprite("link-going-up"));
    if (player.curAnim() !== "walk") {
      player.play("walk");
    }
    player.move(0, -HERO_SPEED);
    console.log(player);
    player.dir = vec2(0, -1);
  });

  onKeyDown("down", () => {
    if (player.curAnim() !== "walk") {
      player.play("walk");
    }
    // player.use(sprite("link-going-down"));
    player.move(0, HERO_SPEED);
    player.dir = vec2(0, 1);
  });
};
