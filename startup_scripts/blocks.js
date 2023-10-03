BlockEvents.modification((e) => {
  e.modify("slide_show:projector", (block) => {
    block.destroySpeed = 0.2;
    block.hasCollision = true;
  });
});
