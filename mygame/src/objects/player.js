export const playerHero = [
  sprite("hero"),
  pos(450, 350),
  health(3),
  area({ scale: 0.9 }), // has a collider
  body({ isStatic: false }),
  "player",
  "friendly",
  "hero",
  // {
  //   // right by default
  //   dir: vec2(1, 0),
  // },
  scale(1),
  // flipX(false),
];
