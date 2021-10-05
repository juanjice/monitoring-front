import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
function ProtectedComponents({component:Component,...props}) {
    const store=useSelector(state=>state.session)
    return (
        <div>
            <Route render={()=>{
                }}/>
            
        </div>
    )
}

export default ProtectedComponents
