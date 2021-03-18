const btn = document.getElementById("btn");
const root = document.getElementById("root");

type Recipe = {
  name: string;
  description: string;
  imageUrl: string | null;
  author: {
    name: string;
    imageUrl: string | null;
  };
  steps: string[];
  ingredients: Ingredient[];
};

type Ingredient = {
  name: string;
  quantity: string;
};

async function getRecipe() {
  const response = await fetch("./recipe.json");
  const recipe = await response.json();
  return recipe as Recipe;
}

if (btn !== null && root !== null) {
  btn.addEventListener("click", async () => {
    const recipe = await getRecipe();
    root.textContent = `Recipe Name: ${recipe.name}`;
  });
}
