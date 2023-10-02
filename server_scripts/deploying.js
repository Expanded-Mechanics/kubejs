ServerEvents.recipes((event) => {
  event.recipes.createDeploying(
    ["create:shadow_steel_casing"],
    ["#c:stripped_logs", "create:shadow_steel"]
  );

  event.recipes.createDeploying(
    ["create:refined_radiance_casing"],
    ["#c:stripped_logs", "create:refined_radiance"]
  );
});
