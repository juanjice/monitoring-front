const initState={
    numIceCream:4
}
const iceCreamReducer=(state=initState,action)=>{
    switch(action.type){
        case 'BUY_ICE_CREAM':
            return {
                ...state,numIceCream:state.numIceCream-1
            }
        default:
            return state;
    }
}
export default iceCreamReducer