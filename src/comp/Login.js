import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const [userID,setUserID] = useState()
  const [pass,setPass] = useState()
  const handleSubmit = (e) =>{
    e.preventDefault()
    localStorage.setItem("userID",userID)
    localStorage.setItem("password",pass)
    alert("Logged in successfully!")
  }
  return (
    <div>
      <form className="container" style={{"marginTop":"20vh"}}>
        <div class="form-group">
          <label htmlFor="exampleInputEmail1">UserID</label>
          <input
            type="email"
            class="form-control"
            id="admin21"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={userID}
            onChange={(e)=>{
              setUserID(e.target.value)
            }}

          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={pass}
            onChange={(e)=>{
              setPass(e.target.value)
            }}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
