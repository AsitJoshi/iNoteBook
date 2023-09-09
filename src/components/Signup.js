import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  let navigate = useNavigate();

  const [cred, setCred] = useState({ name: "", email: "", password: "", cpassword:"" });
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(cred.password!==cred.cpassword){
      alert("password not matching");
      return;
    }

    const {name,email,password} = cred;
    let url = `http://localhost/api/createuser`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,email,password})
    });
    const json = await response.json();

    if(json.success){
      //save the authtoken redirecting to home page
      localStorage.setItem('token',json.authToken);
      navigate("/");
      props.showAlert("Account created successfully","success");


  }else{
      props.showAlert("Invalid Credentials","danger");
  }
  console.log(json);
  }

  const onchange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
    // ... is spread opt it allows ue to copy the existing array or obj into another array or obj
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onchange} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onchange} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onchange} required minLength={5}/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onchange} required minLength={5}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup;
