import { useReducer } from "./UserReducer";
import { combineReducers } from "redux";

const  rootReducer = combineReducers({
    user:useReducer,
});

export default rootReducer;