import { ALL_TRADES, NEW_TRADE } from "../constants/actionTypes";

const reducer = (state = {allTrades : null}, action) => {
    switch (action.type) {
        case ALL_TRADES:
            return {
                ...state,
                allTrades: action?.payload
            }
        default:
            return state;
    }
} 

export default reducer