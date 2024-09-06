import { FC, memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sadButtonClicked } from './action';

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

export default memo(SadIncrementor);
