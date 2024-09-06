import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "../action";

const SadIncrementor: FC = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  function increment() {
    dispatch(sadButtonClicked(quantity, new Date()));
  }

  return (
    <div>
      <h1>Are You Sad?</h1>
      <input
        className="w-10 rounded-lg mr-5 bg-slate-300"
        type="number"
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        onClick={increment}
      >
        Yes
      </button>
    </div>
  );
};

export default memo(SadIncrementor);
