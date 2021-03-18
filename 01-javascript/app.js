const btn = document.getElementById("btn");
const root = document.getElementById("root");

async function getRecipe() {
  const response = await fetch("./recipe.json");
  const recipe = await response.json();
  return recipe;
}

btn.addEventListener("click", async () => {
  const recipe = await getRecipe();
  console.log(recipe);
});
