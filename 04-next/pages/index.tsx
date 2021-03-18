import Link from "next/link";
import { getRecipes } from "../lib/recipe";

import type { NextPage } from "next";
import type { Recipe } from "../lib/recipe";

type Props = {
  recipes: Recipe[];
};

const Home: NextPage<Props> = (props) => {
  const { recipes } = props;

  return (
    <div>
      <h1>My Recipe Site</h1>

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const recipes = await getRecipes();
  return {
    props: {
      recipes: recipes,
    },
  };
};

export default Home;
