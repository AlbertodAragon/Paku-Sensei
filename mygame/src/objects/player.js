export const playerHero = [
  sprite("hero"),
  pos(450, 350),
  health(3),
  area({ scale: 0.9 }),
  body({ isStatic: false }),
  "player",
  "friendly",
  "hero",
  {
    dir: vec2(-0.5, 0),
  },
  state("idle", ["idle", "attack", "move"]),
  scale(1),
];

export const playerLogic = (player, scoreLabel) => {
  console.log("player2", player);
  player.play("idle");

  player.onCollide("dangerous", () => {
    player.hurt(1);
    player.hp() === 0 && destroy(player);
    // go("lose");
  });

  const playerBar = add([
    text("health " + player.hp()),
    { value: player.hp() },
    pos(100, -50),
    scale(1),
    color(BLACK),
  ]);

  player.onUpdate(() => {
    camPos(player.pos);
    playerBar.text = "health " + player.hp();
  });
};
