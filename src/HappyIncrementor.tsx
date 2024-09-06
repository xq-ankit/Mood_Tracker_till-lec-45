import { FC, memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { happyButtonClicked } from './action';

const HappyIncrementor: FC = () => {
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    function increment() {
        dispatch(happyButtonClicked(quantity, new Date()));  // Call the action creator function with current time
    }

    return (
        <div>
            <h1>Are You Happy?</h1>
            <input
                type="number"
                value={quantity}
                onChange={(event) => setQuantity(+event.target.value)}
            />
            <button className="bg-orange-700" onClick={increment}>
                Yes
            </button>
        </div>
    );
};

export default memo(HappyIncrementor);
