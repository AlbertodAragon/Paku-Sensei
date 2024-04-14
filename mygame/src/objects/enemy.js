export const enemies = add([
  pos(80, 100),
  sprite("skeletor"),
  area({ scale: 0.8 }), // has a collider
  body({ isStatic: false }),
  health(1),
  "dangerous",
  state("idle", ["idle", "attack", "move"]),
]);
