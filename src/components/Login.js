import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

  let navigate = useNavigate();

const [cred,setCred] = useState({email:"",password:""});
    const handleSubmit = async(e)=>{
        e.preventDefault();

        let url = `http://localhost/api/authuser`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cred)
        });
        const json = await response.json();
        if(json.success){
            //save the authtoken redirecting to home page
            localStorage.setItem('token',json.authToken);
            navigate("/");
      props.showAlert("Login Successfull","success");


        }else{
          props.showAlert("Invalid Credentials","danger");

        }
        console.log(json);
    }

    const onchange = (e)=>{
        setCred({...cred,[e.target.name]:e.target.value})
        // ... is spread opt it allows ue to copy the existing array or obj into another array or obj
      }

  return (
    <div className="container" style={{width:'40rem',border:'2px solid black',borderRadius:'30px',padding:'20px',marginTop:'9rem'}}>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" name='email'aria-describedby="emailHelp" value={cred.email} onChange={onchange}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" name='password' id="password" value={cred.password} onChange={onchange}/>
    </div>
    <button style={{margin:'2px 250px'}} type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  )
}

export default Login;
