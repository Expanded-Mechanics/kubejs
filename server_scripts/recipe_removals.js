ServerEvents.recipes((event) => {

event.remove({
  type: "minecraft:crafting_shaped",
  output: [
    "minecraft:piston",
    "uncraftingtable76:uncraftingtable",
    "vanillatweaks:dynamite",
    "create:rope_pulley",
    "create:elevator_pulley",
    "createaddition:crafting/diamond_grit_sandpaper",
    "supplementaries:cog_block",
    "wormhole:target_device",
    "wormhole:advanced_target_device",
    "wormhole:portal_frame",
    "wormhole:portal_stabilizer",
    "extended_drawers:access_point",
    "extended_drawers:compacting_drawer",
    "extended_drawers:single_drawer",
    "extended_drawers:double_drawer",
    "extended_drawers:quad_drawer",
    "extended_drawers:connector",
  ],
});

})
