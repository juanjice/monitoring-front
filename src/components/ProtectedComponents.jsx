import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
function ProtectedComponents({component:Component,...rest}) {
    const store=useSelector(state=>state.session)
    return (
        
            <Route {...rest} render={(props)=>{
                if(store.isLogged){
                    return <Component/>
                }else{
                    return <Redirect to={{pathname:'/',state:{from:props.location}}}/>
                }                

                }
            }/>
            
        
    )
}

export default ProtectedComponents
