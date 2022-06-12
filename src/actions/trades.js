import { ALL_TRADES, NEW_TRADE, EXIT_TRADE, INDIVIDUAL_TRADE } from "../constants/actionTypes"
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
            localStorage.clear() // when user is not authorized
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

        // Eg of Success Full Response
        // {
        //     "data": {
        //         "msg": "Trade Information Saved Successfully"
        //     },
        //     "error": null,
        //     "success": true
        // }

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
            "status": false,
            "message" : "Something went wrong"
        }
    }
}

export const exitTrade = (tradeData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.exitTrade(tradeData);

        if(data["success"]){

            const action = {
                type: EXIT_TRADE,
                payload: data["data"]["trade_info"]
            }
            dispatch(action)

            return {
                "status": true,
                "data": data["data"]["msg"]
            }

        } else {
            return {
                "status" : false,
                "message": data['error']
            }
        }

    } catch (error) {
        if(error.response.status == 401){
            localStorage.clear();
            navigate("/")
        }
        return {
            "status": false,
            "message" : "Something went wrong"
        }
    }
}

export const individualTradeDataAction = (script, navigate) => async(dispatch) => {
    try {
        const { data } = await api.individualTradeData(script);

        if(data["success"]){

            const action = {
                type: INDIVIDUAL_TRADE,
                payload: data["data"]["trades_info"]
            }
            dispatch(action)
            
            return {
                "status": true,
                "data": data["data"]["trades_info"]
            }

        } else {
            return {
                "status" : false,
                "message": data['error']
            }
        }

    } catch (error) {
        if(error.response.status == 401){
            localStorage.clear();
            navigate("/")
        }
        return {
            "status": false,
            "message" : "Something went wrong"
        }
    }
}