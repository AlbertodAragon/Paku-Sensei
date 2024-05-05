export const maps = [
  [
    "yccccccccccccccccccw",
    "a                  b",
    "a       (          b",
    "a                  b",
    "a                  b",
    "a           (      b",
    "a                  b",
    "a                  b",
    "a                  b",
    "a                  b",
    "a                  b",
    "a        (         b",
    "a                  b",
    "a                  b",
    "a     (            b",
    "a                  b",
    "xdddddddddcddddddddz",
  ],
  [
    "yccccccccw",
    "a        b",
    ")        )",
    "a        b",
    "a        b",
    "a    $   b",
    ")   s    )",
    "a        b",
    "xddddddddz",
  ],
];

export const levelCfg = {
  tileWidth: 48,
  tileHeight: 48,
  tiles: {
    a: () => [
      sprite("rock"),
      area({ scale: 0.9 }),
      body({ isStatic: true }),
      "wall",
    ],
    b: () => [
      sprite("rock"),
      area({ scale: 0.9 }),
      body({ isStatic: true }),
      "wall",
    ],
    c: () => [
      sprite("rock"),
      area({ scale: 0.9 }),
      body({ isStatic: true }),
      "wall",
    ],
    d: () => [sprite("rock"), area(), body({ isStatic: true }), "wall"],
    w: () => [sprite("rock"), area(), body({ isStatic: true }), "wall"],
    x: () => [sprite("rock"), area(), body({ isStatic: true }), "wall"],
    y: () => [sprite("rock"), area(), body({ isStatic: true }), "wall"],
    z: () => [sprite("rock"), area(), body({ isStatic: true }), "wall"],
    "%": () => [sprite("left-door"), area(), body({ isStatic: true }), "door"],
    9: () => [sprite("top-door"), area(), "next-level"],
    $: () => [sprite("stairs"), area(), "next-level"],
    "-": () => [
      sprite("slicer"),
      area({ scale: 0.9 }),
      "slicer",
      { dir: -1 },
      "dangerous",
    ],
    s: () => [
      sprite("skeletor"),
      area(),
      "dangerous",
      "skeletor",
      { dir: -1, timer: 0 },
    ],
    ")": () => [
      sprite("lanterns"),
      area({ scale: 0.9 }),
      body({ isStatic: true }),
      "wall",
    ],
    "(": () => [
      sprite("fire-pot"),
      area({ scale: 0.3 }),
      body({ isStatic: true }),
      "wall",
    ],
  },
};
