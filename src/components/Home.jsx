import React,{useState,useEffect} from "react";
import {Table} from "react-bootstrap"



function Home() {
    const [users,setUsers]=useState([]);

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
                    <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td></td>
                  </tr>
                )
            }
          
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
