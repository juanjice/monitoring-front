import {LOGIN_SUCCESS,LOGIN_ERROR,LOGOUT,LOG_REQUEST} from './sessionTypes'
export const loginSuccess=(user)=>{
    return {
        type:LOGIN_SUCCESS,
        payload:user
    }
}
export const loginError=(error)=>{
    return {
        type:LOGIN_ERROR,
        payload: error
    }
}
export const logoutFunc=()=>{
    return {
        type:LOGOUT
    }
}
export const logRequest = ()=>{
    return{
        type:LOG_REQUEST
    }
}
