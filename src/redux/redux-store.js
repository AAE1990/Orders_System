import { createStore, combineReducers,  } from "redux";
import orderDataReducers from "./orderData-reducer";
import orderResultReducer from "./orderResult-reduser";

let reducers = combineReducers({
    orderData: orderDataReducers,
    orderResultData: orderResultReducer, 
});

const store = createStore(reducers);

window.store = store;

export default store;