import { combineReducers } from "redux"
import userReducer from "./userReducers";


const rootReducer = combineReducers({
    data: userReducer
});

export default rootReducer;