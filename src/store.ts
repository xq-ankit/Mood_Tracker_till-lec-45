import { AnyAction, createStore } from "redux";
import { HAPPY_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "./action";

type Moment = {
    intensity: number;
    when: Date;
};

export type State = {
    sadMoments: Moment[];
    happyMoments: Moment[];
};

const initialState: State = {
    sadMoments: [],
    happyMoments: [],
};

// Reducer function should be non-mutating
function reducer(currentState: State = initialState, action: AnyAction): State {
    switch (action.type) {
        case HAPPY_BUTTON_CLICKED:
            return {
                ...currentState,
                happyMoments: [
                    ...currentState.happyMoments,
                    { intensity: action.payload.count, when: action.payload.when },
                ],
            };

        case SAD_BUTTON_CLICKED:
            return {
                ...currentState,
                sadMoments: [
                    ...currentState.sadMoments,
                    { intensity: action.payload.count, when: action.payload.when },
                ],
            };

        default:
            return currentState;
    }
}


const store = createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
