const removeAttack = (attack) => {
  wait(0.05, () => {
    destroy(attack);
  });
};

export const projectile = (playerPos, closestEnemy, speed) => {
  const bullet = [
    sprite("bullet"),
    pos(playerPos),
    area(1),
    move(closestEnemy.angle(playerPos), speed),
    offscreen({ destroy: true }),
    scale(1),
    "bullet",
    "plasma",
    state("idle", ["shoot"]),
  ];

  const bullets = closestEnemy && add(bullet);

  play("shoot", {
    volume: 0.2,
  });

  bullets?.onCollide("dangerous", (enemy) => {
    removeAttack(bullets);
    enemy.hurt(1);
    enemy.hp() === 0 && destroy(enemy);
  });

  bullets?.onCollide("wall", () => {
    removeAttack(bullets);
  });
};

export const meleeAttack = (position) => {
  const kaboom = add([sprite("kaboom"), area(2), pos(position), "kaboom"]);

  kaboom.onCollide("dangerous", (enemy) => {
    enemy.hurt(1);
    enemy.hp() === 0 && destroy(enemy);
  });

  removeAttack(kaboom);
};
