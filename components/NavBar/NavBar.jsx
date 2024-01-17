import React from 'react'
import "./NavBar.css" 

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor"> 
        <strong>Naukri.</strong>Com</h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] ">Jobs</li> 
        <li className="menuList text-[#6f6f6f] hover:color-blueColor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-bluecolor">Companies</li>
        <li className="menuList text-[#6f6f6f] hover:text-bluecolor">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-bluecolor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-bluecolor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-bluecolor">Register</li>
      </div>
    </div>
  )
}

export default NavBar