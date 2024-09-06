import { State } from "./store";

export function happyMomemtSelector(state:State){
    return state.happyMoments;
}

export function sadMomemtSelector(state:State){
    return state.sadMoments;
}