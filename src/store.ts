import { AnyAction, createStore } from "redux";
import sadnessReducer, {
  sadState,
  initialSadState,
} from "./reducers/sadnessReducer";
import hapinessReducer, {
  happyState,
  initialHappyState,
} from "./reducers/hapinessReducer";

export type Moment = {
  intensity: number;
  when: Date;
};

export type State = {
  sad: sadState;
  happy: happyState;
};

const initialState: State = {
  sad: initialSadState,
  happy: initialHappyState,
};

// Reducer function should be non-mutating
function reducer(currentState = initialState, action: AnyAction): State {
  return {
    sad: sadnessReducer(currentState.sad, action),
    happy: hapinessReducer(currentState.happy, action),
  };
}

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
