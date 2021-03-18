export type Recipe = {
  name: string;
  description: string;
  imageUrl: string | null;
  steps: string[];
  ingredients: {
    name: string;
    quantity: string;
  }[];
};

export async function getRecipe(): Promise<Recipe> {
  const response = await fetch("/recipe.json");
  const recipe = await response.json();
  return recipe;
}
