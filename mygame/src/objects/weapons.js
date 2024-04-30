const removeAttack = (attack) => {
  wait(0.05, () => {
    destroy(attack);
  });
};

export const projectile = (playerPos, closestEnemy, speed) => {
  const bullet = add([
    sprite("plasma"),
    pos(playerPos),
    area(1),
    move(closestEnemy.angle(playerPos), speed),
    offscreen({ destroy: true }),
    scale(1),
    "bullet",
    "plasma",
    state("idle", ["shoot"]),
  ]);
  bullet.play("idle");

  bullet.onCollide("dangerous", (enemy) => {
    removeAttack(bullet);
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
