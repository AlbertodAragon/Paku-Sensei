export const projectile = (player, enemy, speed)=>
 add([
  sprite("slicer"),
  pos(player.pos),
  area(),
  move(enemy.pos.angle(player.pos), speed),
  offscreen({ destroy: true }),
  scale(0.5)
])