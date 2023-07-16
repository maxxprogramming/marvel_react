import React, {useState, useContext} from 'react'
import { LoginContext } from '../../Contexts/LoginContext'
import { AuthData } from '../../Auth/Auth';
function Login() {
  
  const { username, setUsername ,  setShowProfile , password, setPassword} = useContext(LoginContext);
  
  



  const handleAuth = () => {
    const authenticatedUser = AuthData.find(
      (item) => item.name === username && item.password === password
    );
  
    if (authenticatedUser) {
      authenticatedUser.online = true;
      setShowProfile(true);
   
 
    } else {
      setShowProfile(false);
    
    }
  };

  return (
    <div>
    <header className="App-header">
    <label htmlFor='account'> Account</label>
        <input name="account" type="text" onChange={(event)=> {
        
          setUsername(event.target.value)
        }}></input>
        <label htmlFor='password'>Password</label>
         <input name="password" type="password" onChange={(event)=> {
          setPassword(event.target.value)
        }}></input>
        <button onClick={handleAuth}>Log in</button>
        
      </header>
      
    </div>
  )
}

export default Login
