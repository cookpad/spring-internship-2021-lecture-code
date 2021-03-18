import { FC, useState } from "react";

type Props = {};

export const MyFolderButton: FC<Props> = (props) => {
  const [added, setAdded] = useState<boolean>(false);

  function handleClick() {
    setAdded(!added);
  }

  return (
    <button onClick={handleClick}>
      {added ? "マイフォルダから削除する" : "マイフォルダに登録する"}
    </button>
  );
};
