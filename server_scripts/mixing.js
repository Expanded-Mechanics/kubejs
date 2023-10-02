// Mixing Recipes of the CREATE MOD
ServerEvents.recipes((event) => {
  event.recipes
    .createMixing(
      [Item.of("create:chromatic_compound")],
      [
        Item.of("minecraft:glowstone_dust", 2),
        Item.of("create:powdered_obsidian", 2),
        Item.of("create:polished_rose_quartz", 1),
      ]
    )
    .superheated();
    
});
