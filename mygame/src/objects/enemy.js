let i = 0;

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
  }
};
