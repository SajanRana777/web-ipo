import React from 'react'
import './Navbar1.css'
import logo_icon from '../../assets/Blue_logo.jpg'




const Navbar = () => {
  return (

    <div className='nav'>
  
    <img src={logo_icon} alt=""  className='logo_icon'/> 
    
    <div className='Container'>Bluestock</div>
    
    <div className='btn'>
        <button>PRODUCTS</button>
        <button>PRICING</button>
        <button>COMMUNITY</button>
        <button>MEDIA</button>
        <button>SUPPORT</button>
        </div>
        <div className='login'>
        <button className='signin'>Sign in </button>
        <button className='signup'>SIGN UP NOW</button>
        </div>
   
    
    </div>
  )
}

export default Navbar