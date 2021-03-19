
import { createStore } from "redux";
import reducer from "./reducer";
import types from "./types";


export default store = createStore(reducer);
const {dispatch,getState} = store;

// store.dispatch({ type: types.INCREMENT });
// store.dispatch({ type: types.DECREMENT });

