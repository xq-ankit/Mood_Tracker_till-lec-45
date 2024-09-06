import { State } from "./store";

export function happyMomemtSelector(state: State) {
    return state.happy.happyMoments;
}

export function sadMomemtSelector(state: State) {
    return state.sad.sadMoments;
}
