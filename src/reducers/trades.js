import { ALL_TRADES, NEW_TRADE, INDIVIDUAL_TRADE } from "../constants/actionTypes";

const reducer = (state = { allTrades:[], currentTradeInfo:null }, action) => {
    switch (action.type) {
        case ALL_TRADES:
            return { ...state, allTrades: action.payload };
        case INDIVIDUAL_TRADE:
            return { ...state, currentTradeInfo: action.payload };
        default:
            return state;
    }
} 

export default reducer