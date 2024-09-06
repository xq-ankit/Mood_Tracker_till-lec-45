import { FC } from "react";
import { useDispatch } from "react-redux";
import { clearHappyMoments, clearSadMoments } from "../action";

const ClearMomentsButton: FC = () => {
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearHappyMoments());
        dispatch(clearSadMoments());
    };

    return (
        <button
            onClick={handleClear}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
            Clear
        </button>
    );
};

export default ClearMomentsButton;
