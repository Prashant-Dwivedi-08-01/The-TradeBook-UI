import { ALL_TRADES, NEW_TRADE } from "../constants/actionTypes"
import *  as api from "../api/index"

export const getAllTrades = (navigate) => async(dispatch) => {
    try{
        const { data } = await api.allTrades();

        if( data["success"]){
            const action = {
                type: ALL_TRADES,
                payload: data["data"]["trades_info"]
            }

            dispatch(action)
            
            return {
                "status" : true,
                "data": data["data"]["trades_info"]
            }
        }else{
            return {
                "status" : false,
                "message" : data["error"] // when success if false, we have error. Look Backend API
            }
        }

    }catch(error){
        if(error.response.status == 401){
            localStorage.clear()
            navigate('/')
        }
        return {
            "status" : false,
            "message" : "Something Went Wrong" // when success if false, we have error. Look Backend API
        }
    }


}

export const newTrade = (tradeData, navigate) => async(dispatch) =>{
    try {
        const { data } = await api.enterTrade(tradeData);

        if(data['success']){

            const action = {
                type: NEW_TRADE,
                payload: data['data']['msg']
            }

            dispatch(action)

            return {
                "status": true,
                "data": data["data"]["msg"]
            }
        }else{
            return {
                "status": false,
                "message": data["error"]
            }
        }

    } catch (error) {
        if(error.response.status == 401){
            localStorage.clear()
            navigate('/')
        }
        return {
            "message" : "Something went wrong"
        }
    }
}