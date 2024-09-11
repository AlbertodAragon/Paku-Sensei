const removeAttack = (attack) => {
  wait(0.05, () => {
    destroy(attack);
  });
};

export const projectile = (playerPos, closestEnemy, speed) => {
  closestEnemy &&
    play("shoot", {
      volume: 0.2,
    });

  const bullet = [
    sprite("bullet"),
    pos(playerPos),
    area(1),
    move(closestEnemy.angle(playerPos), speed),
    offscreen({ destroy: true }),
    scale(1),
    "bullet",
    "plasma",
    state("shoot"),
  ];

  const bullets = closestEnemy && add(bullet);
  bullets?.play("shoot");

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
  play("sword", {
    volume: 0.2,
  });

  const kaboom = add([sprite("kaboom"), area(2), pos(position), "kaboom"]);

  kaboom.onCollide("dangerous", (enemy) => {
    enemy.hurt(1);
    enemy.hp() === 0 && destroy(enemy);
  });

  removeAttack(kaboom);
};
