import { combineReducers } from "redux";

import auth from "./auth"
import trades from "./trades"

export default combineReducers({
    trades,
    auth,
})