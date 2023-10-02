// Minecraft Shaped Crafting Recipes
ServerEvents.recipes((event) => {
  // Supplementaries x Create

  // Rope pulley
  event.shaped(Item.of("create:rope_pulley"), ["C", "R", "P"], {
    C: "create:andesite_casing",
    R: ["supplementaries:rope", "farmersdelight:rope"],
    P: "#c:iron_plates",
  });

  // Elevator Pulley
  event.shaped(Item.of("create:elevator_pulley"), ["C", "R", "P"], {
    C: "create:brass_casing",
    R: ["supplementaries:rope", "farmersdelight:rope"],
    P: "#c:iron_plates",
  });

  // Supplementaries Cog Block
  event.shaped(
    Item.of("supplementaries:cog_block", 16),
    ["CGC", "GRG", "CGC"],
    {
      C: "minecraft:copper_ingot",
      R: "minecraft:redstone",
      G: "create:cogwheel",
    }
  );

  // Wormhole Mod
  // Target Device
  event.shaped("wormhole:target_device", ["I R", "aEa", "aCa"], {
    C: "minecraft:compass",
    R: "minecraft:redstone_torch",
    I: "minecraft:iron_ingot",
    a: "create:andesite_alloy",
    E: "minecraft:ender_pearl",
  });

  // Advanced Target Device
  event.shaped("wormhole:advanced_target_device", ["I R", "aEa", "aCa"], {
    C: "minecraft:compass",
    R: "create:electron_tube",
    I: "minecraft:iron_ingot",
    a: "create:brass_ingot",
    E: "minecraft:ender_pearl",
  });

  // Portal Frame
  event.shaped(Item.of("wormhole:portal_frame", 4), [" C ", "CEC", " C "], {
    C: "create:brass_casing",
    E: "minecraft:ender_pearl",
  });

  // Portal Stabilizer
  event.shaped("wormhole:portal_stabilizer", ["ICI", "eEe", "IRI"], {
    C: "create:brass_casing",
    e: "create:electron_tube",
    I: "create:brass_ingot",
    E: "minecraft:ender_pearl",
    R: "minecraft:redstone_block",
  });

  // Drawers

  // Drawer Access Point
  event.shaped("extended_drawers:access_point", ["cac", "aDa", "cac"], {
    D: "#extended_drawers:drawers",
    a: "create:andesite_alloy",
    c: "#c:cobblestone",
  });

  // Compacting Drawer
  event.shaped("extended_drawers:compacting_drawer", ["sPs", "CBC", "sPs"], {
    C: "minecraft:chest",
    P: "minecraft:piston",
    s: "create:sturdy_sheet",
    B: "create:brass_block",
  });

  // Drawer
  event.shaped("extended_drawers:single_drawer", ["apa", "pCp", "apa"], {
    C: "minecraft:chest",
    p: "#minecraft:planks",
    a: "create:andesite_alloy",
  });

  // Double Drawer
  event.shaped("extended_drawers:double_drawer", ["apa", "CpC", "apa"], {
    C: "minecraft:chest",
    p: "#minecraft:planks",
    a: "create:andesite_alloy",
  });

  // Quad Drawer
  event.shaped("extended_drawers:quad_drawer", ["aCa", "CpC", "aCa"], {
    C: "minecraft:chest",
    p: "#minecraft:planks",
    a: "create:andesite_alloy",
  });

  // Drawer Connector
  event.shaped("extended_drawers:connector", ["apa", "ppp", "apa"], {
    p: "#minecraft:planks",
    a: "create:andesite_alloy",
  });
});
