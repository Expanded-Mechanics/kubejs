// Mechanical Crafting Recipes of the CREATE MOD
ServerEvents.recipes((event) => {
  // Piston
  event.recipes.createMechanicalCrafting(
    Item.of("minecraft:piston"),
    ["CCC", "PIP", "PRP"],
    {
      C: "#c:cobblestone",
      P: "#minecraft:planks",
      R: "minecraft:redstone",
      I: "minecraft:iron_ingot",
    }
  );

  // Uncrafting Table
  event.recipes.createMechanicalCrafting(
    Item.of("uncraftingtable76:uncraftingtable"),
    ["RLNLR", "NFSFN", "RLNLR"],
    {
      N: "minecraft:netherite_ingot",
      S: "minecraft:nether_star",
      F: "ae2:fluix_block",
      L: "create:precision_mechanism",
      R: "create:refined_radiance",
    }
  );

  // Creative Wand
  event.recipes.createMechanicalCrafting(
    Item.of("wands:creative_wand"),
    [" R ", "RSR", "RLR", "NLN", "NRN", " N "],
    {
      L: "create:precision_mechanism",
      S: "minecraft:nether_star",
      R: "create:refined_radiance",
      N: "minecraft:netherite_ingot",
    }
  );

  // Creative World Shaper
  event.recipes.createMechanicalCrafting(
    "create:handheld_worldshaper",
    ["NSAss", "Nr   "],
    {
      N: "minecraft:netherite_block",
      S: "minecraft:nether_star",
      s: "create:shadow_steel_casing",
      A: "mcda:gemstone_purple",
      r: "create:refined_radiance_casing",
    }
  );
});
