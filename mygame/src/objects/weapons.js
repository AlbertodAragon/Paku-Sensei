const removeAttack = (attack) => {
  wait(0.05, () => {
    destroy(attack);
  });
};

export const projectile = (player, speed) => {
  var rect = mousePos();
  var x = rect.x - player.pos.x; //x position within the element.
  var y = rect.y - player.pos.y; //y position within the element.
  // const positionFinal = { x, y };

  // console.log("rect", rect);
  console.log("positionFinal", positionFinal);

  const bullet = add([
    sprite("slicer"),
    pos(player.pos),
    area(),
    move(vec2(x, y), speed),
    offscreen({ destroy: true }),
    scale(0.5),
    "bullet",
  ]);

  bullet.onCollide("dangerous", (enemy) => {
    enemy.hurt(1);
    enemy.hp() === 0 && destroy(enemy);
  });

  bullet.onCollide("wall", () => {
    removeAttack(bullet);
  });
};

export const meleeAttack = (position) => {
  const kaboom = add([sprite("kaboom"), area(9), pos(position), "kaboom"]);

  kaboom.onCollide("dangerous", (enemy) => {
    enemy.hurt(1);
    enemy.hp() === 0 && destroy(enemy);
  });

  removeAttack(kaboom);
};
