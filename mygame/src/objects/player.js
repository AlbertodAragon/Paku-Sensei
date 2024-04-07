export const playerHero = [
  sprite("crisis-left"),
  pos(300, 220),
  health(3),
  area({ scale: 0.9 }), // has a collider
  body({ isStatic: false }),
  "player",
  "friendly",
  {
    // right by default
    dir: vec2(1, 0),
  },
];