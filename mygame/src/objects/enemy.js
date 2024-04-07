
export const enemies = add([
  pos(80, 100),
  sprite("skeletor"),
  area({ scale: 0.9 }), // has a collider
  body({ isStatic: false }),
  health(1),
  "dangerous",
  state("idle", ["idle", "attack", "move"]),
]);
