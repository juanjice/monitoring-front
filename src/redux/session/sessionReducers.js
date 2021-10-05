const initState={
    loading:false,
    isLogged:false,
    user:[],
    error:null
    
}
const sessionReducer=(state=initState,action)=>{
    switch(action.type){
        case 'LOG_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                loading:false,
                isLogged:true,
                user:action.payload
            }
        case 'LOGIN_ERROR':
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case 'LOG_OUT':
            return{
                ...state,
                loading:false,
                isLogged:false,
                user:[],
                error:null

            }
    default : 
        return state;
    }
}
export default sessionReducer