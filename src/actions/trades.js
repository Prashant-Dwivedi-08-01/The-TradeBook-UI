import { ALL_TRADES } from "../constants/actionTypes"
import *  as api from "../api/index"

export const getAllTrades = () => async(dispatch) => {
    try{
        const { data } = await api.allTrades();

        if( data["success"]){
            const action = {
                type: ALL_TRADES,
                payload: data["data"]["trades_info"]
            }
            
            console.log(data["data"]["trades_info"]);
            dispatch(action)
            // navigate('/')
        }else{
            return {
                "message" : data["error"] // when success if false, we have error. Look Backend API
            }
        }

    }catch(error){
        console.log(error.message);
        return {
            "message" : "Something went wrong"
        }
    }


}