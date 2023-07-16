import React, {useState, useContext} from 'react'
import { LoginContext } from '../../Contexts/LoginContext'
import DrawList from '../list/DrawList';
import { AuthData } from '../../Auth/Auth';
import OnlineUsers from '../onlineUsers/OnlineUsers';



function Profile() {

  const {username , data, database} = useContext(LoginContext);

 
  return (
    
    <>
   <OnlineUsers />
 
      <h1>Profile </h1>
      <h2>You are logged as {username}</h2>
      <DrawList database={database} />
    </>
  )
}

export default Profile
