import React, { useState }from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom'

function Adduser() {
    let history = useHistory();
     const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
     });

     const onInputChange=(e)=>{
        setUser({...user,[e.target.name]: e.target.value})
     };
     
     const onSubmit=async(e)=>{
         e.preventDefault();
         await axios.post("http://localhost:3001/users",user)
         history.push("/");
     };

    return (
        <>
        <div className="container col-6 mt-5">
        <h1 className="text-center"> Form add </h1>
        <form onSubmit={e=>onSubmit(e)}>
  <div className="mb-3">
  
    <label for="exampleInputPassword1" className="form-label">enter name</label>
    <input type="text" name="name" onChange={e=>onInputChange(e)} value={user.name} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">enter ur username</label>
    <input type="text" name="username" onChange={e=>onInputChange(e)} value={user.username} className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email" onChange={e=>onInputChange(e)} value={user.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">phone no.</label>
    <input type="text" name="phone" onChange={e=>onInputChange(e)} value={user.phone} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">website name</label>
    <input type="text"  name="website" onChange={e=>onInputChange(e)} value={user.website} className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
        </>
    )
}

export default Adduser;
