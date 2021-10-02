import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import userServices from "../../services/userServices";
import validator from 'validator';
function RegisterForm() {
  const initialStateRegister = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPass: "",
  };
  const history = useHistory();
  const [error, setError] = useState(null);  
  const [formValues, setFormValues] = useState(initialStateRegister);

  const handleInputs = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    
  };

  const saveUser = (e) => {
    e.preventDefault(); 
    let newError=null;    
    newError=matchPassword(newError); 
    newError=validMail(newError);
    newError=mandatoryFields(newError);  
    setError(newError)      
    if(!newError){
      let user = { email: formValues.email, firstName: formValues.firstName, lastName: formValues.lastName };
        userServices.addUser(user).then((res) => {
        history.push("/")
      })
    }
  };
  const mandatoryFields = (newError) => {
    if (
      formValues.email === "" ||
      formValues.firstName === "" ||
      formValues.lastName === "" ||
      formValues.password === "" ||
      formValues.confirmPass === ""
    ) {      
      return "All fields are mandatory!"
    }
    else{
      return newError
    }
  };
  const matchPassword = (newError) => {
    if (formValues.password !== formValues.confirmPass) {
      return "Password doen't match!"
    }else{
      return newError
    }
  };
  const validMail =(newError)=>{
    if(!validator.isEmail(formValues.email)){
      return "The mail is invalid!"
    }else{
      return newError
    }
  }

  return (
    <div className="container ">
      <br />
      <h2 className="d-flex justify-content-center">Register</h2>
      <form>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="Enter first name"
            onChange={(e) => {
              handleInputs(e);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Enter last name"
            onChange={(e) => {
              handleInputs(e);
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
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              handleInputs(e);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              handleInputs(e);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            name="confirmPass"
            placeholder="Confirm Password"
            onChange={(e) => {
              handleInputs(e);
            }}
          />
        </div>
        <br />
        <button
          type="button"
          className="btn btn-primary "
          onClick={(e) => {
            saveUser(e);
          }}
        >
          Submit
        </button>
      </form>

      <br />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
