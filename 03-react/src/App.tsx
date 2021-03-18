import React, { useEffect, useState } from "react";
import { getRecipe, Recipe } from "./getRecipe";
import { Ingredients } from "./Ingredients";
import { MyFolderButton } from "./MyFolderButton";
import { Steps } from "./Steps";

function App() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    (async () => {
      const recipe = await getRecipe();
      setRecipe(recipe);
    })();
  }, []);

  if (recipe === null) return <div>loading...</div>;

  return (
    <div>
      <h1 className="header">My Recipe Page!</h1>

      <h2 className="title">{recipe.name}</h2>

      {recipe.imageUrl && (
        <img className="recipeImage" src={recipe.imageUrl} alt="" width="300" />
      )}

      <div className="btn">
        <MyFolderButton />
      </div>

      <h3 className="subTitle">材料</h3>
      <Ingredients ingredients={recipe.ingredients} />

      <h3 className="subTitle">手順</h3>
      <Steps steps={recipe.steps} />
    </div>
  );
}

export default App;
