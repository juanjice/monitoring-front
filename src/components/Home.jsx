import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { fetchUsers } from "../redux";
import {Table} from "react-bootstrap"
import userServices from "../services/userServices";
import CancelButton from "./utils/CancelButton";
import DeleteButton from "./utils/DeleteButton";
import EditButton from "./utils/EditButton";
import SaveButton from "./utils/SaveButton";
import ViewMore from "./utils/ViewMore";
import Loading from "./info_components/Loading";
import FetchError from "./info_components/FetchError";



function Home() {
    const state = useSelector(state => state.users)
    const dispatch = useDispatch()   
    const [editMode,setEditMode]=useState({id:null,state:false});    
    const [newUser,setNewUser]=useState(null)

    useEffect(() => {      
        dispatch(fetchUsers())                         
    }, [dispatch])

    const deleteUser=(id)=>{
      
      userServices.delUser(id).then(res=>{
        dispatch(fetchUsers())
        alert(`Usuario numero ${id} eliminado satisfactoriamente`)
      })
    }
    const activeEditMode=(id)=>{
        setEditMode({id:id,state:true})        
        setNewUser(state.data.filter(user=>user.id===id)[0]);
        
    }
    const cancelEditMode=()=>{
      setEditMode({id:null,state:false})
      setNewUser(null)
    }
    const updateUser=(id)=>{
      userServices.updateUser(id,newUser).then(res=>{
        dispatch(fetchUsers())
        cancelEditMode()
      })
    }
    return (
    <div className="container pt-3">
      <h1 className="d-flex justify-content-center">List of users</h1>
      <Table striped bordered hover>
        <thead>
          <tr>            
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
              (!state.loading && !state.error) && (state.data.map( user=> 
                  {
                    if(editMode.id===user.id && editMode.state){                      
                      return (
                    <tr key={user.id}>
                    <td><input type="text" value={newUser.firstName} onChange={e=>setNewUser({...newUser,firstName:e.target.value})} /> </td>
                    <td><input type="text" value={newUser.lastName} onChange={e=>setNewUser({...newUser,lastName:e.target.value})}/></td>
                    <td> <input type="text" value={newUser.email} onChange={e=>setNewUser({...newUser,email:e.target.value})}/></td>
                    <td style={{width:"20%",textAlign:"center"}}>
                    <div>
                        <SaveButton saveFunc={updateUser} userId={user.id}></SaveButton>
                        <CancelButton cancelFunc={cancelEditMode}></CancelButton>
                    </div>
                    </td> 


                    </tr>)
                    } else{
                      return (
                    <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td style={{width:"20%",textAlign:"center"}}>
                    <div >
                        <ViewMore> </ViewMore> 
                        <EditButton editFunc={activeEditMode} userId={user.id}></EditButton>
                        <DeleteButton deleteFunc={deleteUser} userId={user.id}></DeleteButton> 
                    </div>
                    </td>
                    </tr>)
                    }
                  }                    
                ))

            }
          
        </tbody>
      </Table>
      {
        state.loading ? <Loading/> : state.error ? <FetchError message={state.error}/> :null
      } 
         
    </div>
  );
}

export default Home;
