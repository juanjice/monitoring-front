import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyCake,buyIceCream} from '../redux'
function HooksRedux() {
    const numCakes=useSelector(state=>state.cake.numOfCakes)
    const numIceCream=useSelector(state=>state.iceCream.numIceCream)
    const dispatch=useDispatch()
    const [numToBuy,setNumToBuy]=useState(0)
    return (
        <div>
            <h1>Num of Cakes - {numCakes} </h1>
            <input type="number" value={numToBuy} onChange={e=>setNumToBuy(e.target.value)} />
            <button onClick={()=>dispatch(buyCake(numToBuy))}>Buy n Cakes</button>

            <h1>Num of IceCream -{numIceCream}</h1>
            <button onClick={()=>dispatch(buyIceCream())}>Buy Cake</button>
        </div>
    )
}

export default HooksRedux
