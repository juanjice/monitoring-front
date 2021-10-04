const initState={
    loading:false,
    data:[],
    error:null
}
const userReducer=(state=initState,action)=>{
    switch(action.type){
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,data:action.payload,error:null,loading:false
            }
        case 'FETCH_USER_ERROR':
            return{
                ...state,error:action.payload,loading:false
            }
        case 'FETCH_USER_REQUEST':
            return {
                ...state,error:null,loading:true
            }
        default:
            return state;
    }
}
export default userReducer