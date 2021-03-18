import recipes from "../data/recipes.json";

export type Recipe = {
  id: number;
  name: string;
  description: string;
  imageUrl: string | null;
  steps: string[];
  ingredients: {
    name: string;
    quantity: string;
  }[];
};

export async function getRecipes(): Promise<Recipe[]> {
  return recipes as Recipe[];
}

export async function getRecipe(id: number): Promise<Recipe | null> {
  return (recipes as Recipe[]).find((recipe) => recipe.id === id) || null;
}
