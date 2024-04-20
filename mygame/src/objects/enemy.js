var demon = [
  pos(Math.trunc(Math.random() * 20) + 1, Math.trunc(Math.random() * 20) + 1),
  sprite("skeletor"),
  area({ scale: 0.8 }), // has a collider
  body({ isStatic: false }),
  health(1),
  "dangerous",
  state("idle", ["idle", "attack", "move"]),
];

export const spawnDemons = () => {
  // console.log(demon);
  add([
    pos(
      Math.trunc(Math.random() * (700 - 80) + 80),
      Math.trunc(Math.random() * (700 - 100) + 100)
    ),
    sprite("skeletor"),
    area({ scale: 0.8 }), // has a collider
    body({ isStatic: false }),
    health(1),
    "dangerous",
    state("idle", ["idle", "attack", "move"]),
  ]);
  // console.log(Math.trunc(Math.random() * 100));
  wait(rand(0.5, 1), spawnDemons);
};
