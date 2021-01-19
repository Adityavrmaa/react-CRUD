import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";



function Home() {
 
    const [user, setUser] = useState([]);
    
    useEffect(()=>
    {  
      loadUsers();
    },[]);

// use effect functaion define 
     const loadUsers = async () => {
     const result = await axios.get("http://localhost:3001/users");
     setUser(result.data);
    }

    // delete user function start here 
      const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
      }
   
    return (
        <div className="container text-center py-3">
            <h1>Home Table</h1>
            <table class="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        user.map((user,index)=>(
            <tr >
            <th scope="row">{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link className="btn btn-success m-1" to={`/user/${user.id}`}>view</Link>
                <Link className="btn btn-info m-1" to={`/user/edituser/${user.id}`}>Edit</Link>
                <Link className="btn btn-danger m-1" onClick={()=>deleteUser(user.id)}>delete</Link>
            </td>

            </tr>
        )
        )
    }
   
  </tbody>
</table>
        </div>
    )
}
export default Home;