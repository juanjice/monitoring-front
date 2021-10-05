import {FETCH_USER_ERROR,FETCH_USER_SUCCESS,FETCH_USER_REQUEST} from './usersTypes'
import userServices from '../../services/userServices'
export const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}
export const fetchUserSuccess=(users)=>{
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
export const fetchUserError=(error)=>{
    return {
        type:FETCH_USER_ERROR,
        payload:error
    }
}
export const fetchUsers =()=>{
    return (dispatch)=>{

        dispatch(fetchUserRequest())        
        userServices.getUsers().then(response=>{
            const users= response.data
            dispatch(fetchUserSuccess(users))
        }            
        ).catch(
            error=>{
                const errorMsg=error.message
                dispatch(fetchUserError(errorMsg))
            }
        
        )
    }
}