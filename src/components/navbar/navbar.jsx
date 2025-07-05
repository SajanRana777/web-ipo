import React from 'react'
import './Navbar1.css'
import logo_icon from '../../assets/Blue_logo.jpg'




const Navbar = () => {
  return (
 <div>
    <div className='nav'>
  
    <img src={logo_icon} alt=""  className='logo_icon'/> 
    
    <div className='Container'>Bluestock</div>
    
    <div className='manu'>
      <h3>PRODUCTS</h3>
      <h3>PRICING</h3>
      <h3>COMMUNITY</h3>
      <h3>MEDIA</h3>
      <h3>SUPPORT</h3>
        </div>


        <div className='login'>

        <button className='signin'>Sign in </button>
        <button className='signup'>SIGN UP NOW</button>
    </div>
        </div>


        <div className='card'>

            <h4> Bluestock > </h4> 
            <h4> IPO  > </h4> 
            <h4 className='up'> UPCOMING IPO</h4>
          </div>
          

   <h2>Upcoming IPO</h2>
   <p>Companies that have filled for an IPO with SEBI. Few details might be disclosed by the companies later</p>
     
 </div>
        
  )
}

export default Navbar