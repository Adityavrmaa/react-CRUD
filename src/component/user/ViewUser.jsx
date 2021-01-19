import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

function ViewUser() {
    const {id}= useParams();
   const[user, SetUser] = useState({
       name:"",
       username:"",
       email:"",
       phone:"",
       website:"",
   });


   useEffect(() => {
    loadUser();
   },[]);
  const loadUser = async ()=>{
      const res = await axios.get(`http://localhost:3001/users/ ${id}`);
      SetUser(res.data);      
  };




    return (
        <>
        <div className="container col-6">
        <h1>View page</h1>
        <h3> ID : {id} </h3>
        <ul className="list-group">
        <li className="list-group-item">name :- {user.name}</li>
        <li className="list-group-item">username :-{user.username}</li>
        <li className="list-group-item">email:-{user.email}</li>
        <li className="list-group-item">phone :-{user.phone}</li>
        <li className="list-group-item">website:- {user.website}</li>
      </ul>
      </div>
      </>
    )
}

export default ViewUser;
