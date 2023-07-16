import React from 'react'
import { AuthData } from '../../Auth/Auth';

function OnlineUsers() {
    
 
const onlineCounter = AuthData.filter((user) => user.online ).length;




  return (
    <div>
      <p>Online Users: ({onlineCounter})</p>
    </div>
  )
}

export default OnlineUsers
