import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  var [userID,setUserID] = useState()
  var [pass,setPass] = useState()
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!userID || !pass)
    {
      alert("userID and Password both are required")
    }
    else
    {
    alert("Logged in successfully!")
    localStorage.setItem("userID",userID)
    localStorage.setItem("password",pass)
  }
  }
  
  return (
    <div>
      <form className="container" style={{"marginTop":"20vh"}}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">UserID</label>
          <input
            type="email"
            className="form-control"
            id="admin21"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={userID}
            onChange={(e)=>{
              setUserID(e.target.value)
            }}
            
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={pass}
            onChange={(e)=>{
              setPass(e.target.value)
            }}

          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
