// Startup script, 1.18.2

// add attributes to slide show block
StartupEvents.registry("block" , (event) => {        
    event.modify("slide_show:projector", (block) => {
        block.destroySpeed = 0.2;
        block.hasCollision = true;
    });
});