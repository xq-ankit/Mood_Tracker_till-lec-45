import { AnyAction } from "redux";
import { Moment } from "../store";
import { SAD_BUTTON_CLICKED, CLEAR_SAD_MOMENTS } from "../action";

export type sadState = {
    sadMoments: Moment[];
};

export const initialSadState: sadState = {
    sadMoments: [],
};

function sadnessReducer(
    currentState: sadState = initialSadState,
    action: AnyAction
): sadState {
    switch (action.type) {
        case SAD_BUTTON_CLICKED:
            return {
                ...currentState,
                sadMoments: [
                    ...currentState.sadMoments,
                    { intensity: action.payload.count, when: action.payload.when },
                ],
            };

        case CLEAR_SAD_MOMENTS:
            return initialSadState;

        default:
            return currentState;
    }
}

export default sadnessReducer;
