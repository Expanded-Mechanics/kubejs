// Crushing Recipes of the Create MOD
ServerEvents.recipes((event) => {
    event.recipes.createCrushing(
        [Item.of("create_so:crushed_diamonds", 2)],
        ["minecraft:diamond"]
      );
})