import { AnyAction } from "redux";
import { Moment } from "../store";
import { HAPPY_BUTTON_CLICKED, CLEAR_HAPPY_MOMENTS } from "../action";

export type happyState = {
    happyMoments: Moment[];
};

export const initialHappyState: happyState = {
    happyMoments: [],
};

function hapinessReducer(
    currentState: happyState = initialHappyState,
    action: AnyAction
): happyState {
    switch (action.type) {
        case HAPPY_BUTTON_CLICKED:
            return {
                ...currentState,
                happyMoments: [
                    ...currentState.happyMoments,
                    { intensity: action.payload.count, when: action.payload.when },
                ],
            };

        case CLEAR_HAPPY_MOMENTS:
            return initialHappyState;

        default:
            return currentState;
    }
}

export default hapinessReducer;
