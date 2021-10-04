import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducers";
import userReducer from "./users/usersReducers";
const rootReducer=combineReducers({cake:cakeReducer,iceCream:iceCreamReducer,users:userReducer})
export default rootReducer