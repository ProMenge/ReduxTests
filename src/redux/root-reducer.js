import { combineReducers } from "redux";
import cartReducer from "./cart/slice";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({ userReducer, cartReducer });

export default rootReducer;
