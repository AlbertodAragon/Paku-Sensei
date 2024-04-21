import { HERO_SPEED } from "../contants/constants";

export const playerLogic = (player, scoreLabel) => {
  player.play("idle");

  player.onCollide("dangerous", () => {
    player.hurt(1);
    player.hp() === 0 && destroy(player);
  });

  // player.on("death", () => {
  //   destroy(player);
  //   go("lose", { score: scoreLabel.value });
  // });

  const playerBar = add([
    text("health " + player.hp()),
    { value: player.hp() },
    pos(100, 550),
    scale(1),
  ]);

  player.onUpdate(() => {
    camPos(player.pos);
    playerBar.text = "health " + player.hp();

    // enemy.moveTo(player.pos.x, player.pos.y, ENEMY_SPEED);
  });
};

// player.on("death", () => {
//   destroy(player);
//   go("lose", { score: scoreLabel.value });
// });

// player.onCollide("next-level", () => {
//   go("game", {
//     level: (level + 1) % maps.length,
//     score: scoreLabel.value,
//   });
// });
