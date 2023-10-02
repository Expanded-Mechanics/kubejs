// Compacting recipes
ServerEvents.recipes((event) => {

    /* Briefing
        • Supports multiple inputs and outputs
        • Supports .heated() and .superheated
        • can have a fluid output as long as it has another item output
        • Supports chance-based output
        • uses the Mechanical Press, Basin, and optionally a Blaze Burner 
    */

    /* Code Example
        e.recipes.create.compacting("output", "input");
        e.recipes.create.compacting("output", "input").heated();
        e.recipes.create.compacting("output", "input").superheated();
        e.recipes.create.compacting([Fluid."name"(number in mb), "output"], ["input", "input"]);
        e.recipes.create.compacting(['output', Item.of('item').withChance(0.3)], 'input')    
    */

});

