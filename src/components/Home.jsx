import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { fetchUsers } from "../redux";
import {Table} from "react-bootstrap"
import userServices from "../services/userServices";
import CancelButton from "./utils/CancelButton";
import DeleteButton from "./utils/DeleteButton";
import EditButton from "./utils/EditButton";
import SaveButton from "./utils/SaveButton";
import Loading from "./info_components/Loading";
import FetchError from "./info_components/FetchError";



function Home() {
    const state = useSelector(state => state.users)
    const dispatch = useDispatch()
    const [users,setUsers]=useState([]);
    const [editMode,setEditMode]=useState({id:null,state:false});
    const [newUser,setNewUser]=useState(null)
    useEffect(() => {
      
        userServices.getUsers().then(res=>{
            setUsers(res.data)
        })
        dispatch(fetchUsers())
        console.log(state.data)
    }, [newUser])
    const deleteUser=(id)=>{
      userServices.delUser(id).then(res=>{
        alert(`Usuario numero ${id} eliminado satisfactoriamente`)        
        setUsers(users.filter(user=>user.id!==id))
      })
    }
    const activeEditMode=(id)=>{
        setEditMode({id:id,state:true})        
        setNewUser(users.filter(user=>user.id===id)[0]);
    }
    const cancelEditMode=()=>{
      setEditMode({id:null,state:false})
      setNewUser(null)
    }
    const updateUser=(id)=>{
      userServices.updateUser(id,newUser).then(res=>{
        console.log(res)
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
              (!state.loading && !state.error) && (users.map( user=> 
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
                    <div>
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
