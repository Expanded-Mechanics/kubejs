// Cutting recipes
ServerEvents.recipes((event) => {

    /* Briefing
        • Supports multiple chance-based outputs
        • Supports .processingTime()
        • uses the Mechanical Saw
    */

    /* Code Example
        e.recipes.create.cutting('output', 'input')
        e.recipes.create.cutting('output', 'input').processingTime(500)
        e.recipes.create.cutting(['output', Item.of('output').withChance(0.5)], 'input') 
    */

});

