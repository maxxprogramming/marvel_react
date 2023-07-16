import React from 'react'
import { Link } from 'react-router-dom'

import navigation from './navigation.css'

function Navigation() {
  return (
    <div>
    <div className='navigation'> 
    <div className='navigation_links'> 
      <Link to="/home"><span>  Home</span> </Link>
      <Link to="/heroes"><span>Heroes </span></Link>
      <Link to="/aboutus"><span>About Us</span></Link>
     
      </div>
      </div>
    </div>
  )
}

export default Navigation
