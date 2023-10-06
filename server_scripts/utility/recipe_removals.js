// Modpack specific recipe removals
ServerEvents.recipes((event) => {
  // shaped recipes removals
  event.remove({
    type: "minecraft:crafting_shaped",
    output: [
      "constructionwand:infinity_wand",
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

  // milling removals
  event.remove({
    type: "create:milling",
    output: ["create_so:crushed_diamonds"],
  });

  // crushing removals
  event.remove({
    type: "create:crushing",
    output: "createaddition:diamond_grit",
  });
});
