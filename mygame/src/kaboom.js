import kaboom from "kaboom";

export const k = kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  clearColor: [0, 0, 0, 1],
  background: [255, 255, 255],
});

export default k;
