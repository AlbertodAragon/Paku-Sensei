import { HERO_SPEED } from "../contants/constants";

export const movement = (player) => {
  onKeyDown("left", () => {
    player.use(sprite("link-going-left"));
    player.move(-HERO_SPEED, 0);
    player.dir = vec2(-1, 0);
  });

  onKeyDown("right", () => {
    player.use(sprite("link-going-right"));
    player.move(HERO_SPEED, 0);
    player.dir = vec2(1, 0);
  });

  onKeyDown("up", () => {
    player.use(sprite("link-going-up"));
    player.move(0, -HERO_SPEED);
    player.dir = vec2(0, -1);
  });

  onKeyDown("down", () => {
    player.use(sprite("link-going-down"));
    player.move(0, HERO_SPEED);
    player.dir = vec2(0, 1);
  });
};
