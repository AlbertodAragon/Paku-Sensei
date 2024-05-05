export const leveText = (level) => {
  add([
    text("level " + parseInt(level + 1)),
    pos(350, -50),
    scale(1),
    color(BLACK),
  ]);
};
