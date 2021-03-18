import { FC } from "react";

type Props = {
  ingredients: {
    name: string;
    quantity: string;
  }[];
};

export const Ingredients: FC<Props> = (props) => {
  return (
    <ul>
      {props.ingredients.map((ing, i) => (
        <li key={i}>
          {ing.name} : {ing.quantity}
        </li>
      ))}
    </ul>
  );
};
