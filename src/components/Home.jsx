import React,{useState,useEffect} from "react";
import {Table} from "react-bootstrap"
import userServices from "../services/userServices";
import DeleteButton from "./utils/DeleteButton";
import EditButton from "./utils/EditButton";



function Home() {
    const [users,setUsers]=useState([]);
    useEffect(() => {
        userServices.getUsers().then(res=>{
            setUsers(res.data)
        })
    }, [])
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
                users.map( user=> 
                    <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td style={{width:"20%",textAlign:"center"}}>
                        <div >
                        <EditButton></EditButton>
                        <DeleteButton></DeleteButton>  
                        </div>
                        
                                              
                    </td>
                  </tr>
                )
            }
          
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
