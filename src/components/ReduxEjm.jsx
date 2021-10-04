import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'
function ReduxEjm(props) {
    return (
        <div>
            <h2>Redux Example</h2>
            <p>{props.numOfCakes}</p>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps= state=>{
    return {
         numOfCakes : state.numOfCakes
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        buyCake: () => dispatch(buyCake())
        
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(ReduxEjm)
