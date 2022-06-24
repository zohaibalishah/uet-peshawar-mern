import React,{useState} from "react";

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const login=()=>{
      // fetch("http://localhost:300/login",{
      //   email:email,
      //   password:password,
      // }).then(())

    }

    const onChnageEmail=(e)=>{
        setEmail(e.target.value)
    }
  return (
    <div style={{margin:'10px'}}>
      <label>Email</label>
      <input 
      onChange={onChnageEmail}
      type={"text"} placeholder="Enter Email Address" />
      <br />
      <br />
      <label>Password</label>
      <input onChange={(e)=>setPassword(e.target.value)} type={"password"} placeholder="Enter Your password" />

      <button type="button" onClick={login}>Login</button>
      <h3>Email {email}</h3>
      <h3>Password {password}</h3>

    </div>
  );
}

export default Login;
