import { getRecipe } from "../../lib/recipe";

import type { GetServerSideProps, NextPage } from "next";
import type { Recipe } from "../../lib/recipe";

type Props = {
  recipe: Recipe;
};

const RecipePage: NextPage<Props> = (props) => {
  const { recipe } = props;

  return (
    <div>
      <h1>My Recipe Site</h1>

      {recipe && (
        <main>
          <h2>{recipe.name}</h2>

          {recipe.imageUrl && (
            <img src={recipe.imageUrl} alt="レシピ画像" width="300" />
          )}

          <p>{recipe.description}</p>

          <h3>材料</h3>
          <ol>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>
                {ing.name} : {ing.quantity}
              </li>
            ))}
          </ol>

          <h3>手順</h3>
          <ol>
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </main>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.params?.id);
  if (id === 0 || isNaN(id)) {
    return {
      notFound: true,
    };
  } else {
    const recipe = await getRecipe(id);
    return {
      props: {
        recipe: recipe,
      },
    };
  }
};

export default RecipePage;
