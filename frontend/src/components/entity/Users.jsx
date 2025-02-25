import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import './Users.css'
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(response =>{
            setUsers(response.data)
        })
        .catch(error =>{
            console.error('There was an error fetching the users!',error)
        })
    },[])
  return (
    <div>
      <h1>Space Quest Users</h1>
      <div className='users'>
        {users.map((user)=>{
          console.log(user)
            return(
                <div className='user' key={user._id}>
                    <h3>{user.username}</h3>
                    <p>{user.email}</p>
                   
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Users
