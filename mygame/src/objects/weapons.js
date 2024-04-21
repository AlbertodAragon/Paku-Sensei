const removeMelee = (kaboom) => {
  wait(0.2, () => {
    destroy(kaboom);
  });
};

export const projectile = (player, enemy, speed) => {
  const bullet = add([
    sprite("slicer"),
    pos(player.pos),
    area(),
    move(enemy.pos.angle(player.pos), speed),
    offscreen({ destroy: true }),
    scale(0.5),
  ]);

  bullet.onCollide("dangerous", () => {
    enemy.hurt(1);
  });

  bullet.onCollide("wall", () => {
    destroy(bullet);
  });
};
export const meleeAttack = (position) => {
  const kaboom = add([sprite("kaboom"), area(9), pos(position), "kaboom"]);

  kaboom.onCollide("dangerous", (enemy) => {
    enemy.hurt(1);
    enemy.hp() === 0 && destroy(enemy);
  });

  removeMelee(kaboom);
};
