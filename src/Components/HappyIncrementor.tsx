import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "../action";

const HappyIncrementor: FC = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  function increment() {
    dispatch(happyButtonClicked(quantity, new Date()));
  }

  return (
    <div>
      <h1>Are You Happy?</h1>
      <input
        className="w-10 rounded-lg mr-5 bg-slate-300"
        type="number"
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
      />
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        onClick={increment}
      >
        Yes
      </button>
    </div>
  );
};

export default memo(HappyIncrementor);
