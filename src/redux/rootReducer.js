import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducers";
import userReducer from "./users/usersReducers";
import sessionReducer from "./session/sessionReducers";
const rootReducer=combineReducers({cake:cakeReducer,iceCream:iceCreamReducer,users:userReducer,session:sessionReducer})
export default rootReducer