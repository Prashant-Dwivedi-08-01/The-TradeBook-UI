import { LOGIN , LOGOUT} from "../constants/actionTypes"

import * as api from "../api/index"

export const login = (formData, navigate) => async(dispatch) => {
    try{
        const { data } = await api.login(formData);

        if( data["success"]){
            const action = {
                type: LOGIN,
                payload: data["data"]
            }
    
            dispatch(action)
            navigate('/')
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
export const logout = (navigate) => async(dispatch) => {
    try{
        const { data } = await api.logout();

        if( data["success"]){
            const action = {
                type: LOGOUT,
                payload: data["data"]
            }
    
            dispatch(action)
            navigate('/')
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