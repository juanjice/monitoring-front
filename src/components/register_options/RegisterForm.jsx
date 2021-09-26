import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import userServices from "../../services/userServices";

function RegisterForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //const [password,setPassword]=useState("")
  const [formError, setFormError] = useState(null);

  const saveUser = (e) => {    
    e.preventDefault();    
    if (email === "" || firstName === "") {
      setFormError("Email and Name are mandatory fields!");
      return;
    }else{
        let user = { email: email, firstName: firstName, lastName: lastName };
        userServices.addUser(user).then((res) => {
        history.push("/");
      });
    }
    
  };

  return (
    <div className="container ">
      <br />
      <h2 className="d-flex justify-content-center">Register</h2>

      <form >
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter first name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Email address:</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={ (e)=> {
            setFormError(null) 
            saveUser(e)}}>
          Submit
        </button >
      </form>

      <br />
      {formError ? (
        <div className="alert alert-danger" role="alert">
          {formError}
        </div>
      ) : null}
    </div>
  );
}

export default RegisterForm;
