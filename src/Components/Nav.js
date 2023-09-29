import React, { useState } from 'react'
import icon from "../assets/images/icon-cart.svg"
import avatar from "../assets/images/image-avatar.png"
import menu from "../assets/images/icon-menu.svg"
import close from "../assets/images/icon-close.svg"
import "../styles/Nav.css"

function Nav() {
  const [open, setOpen] = useState(false)
  const [cart, setCart] = useState(false)
  return (
    <>
    <div className='overlay'></div>
    <div className={open? "openside":'sidebar'}>
    </div>
    <header className='navcontainer'>
      <p onClick={e => setOpen(!open)}>
        {open?
        <img id='close' src={close} alt="close icon" /> :
        <img id='menu' src={menu} alt="menu" />
        }
      
      </p>
       <h1 className="brandname">sneakers</h1>
       <ul className={open? "open":'nav'}>
        <li>Collections</li>
        <li> Men</li>
        <li> Women</li>
        <li> About</li>
        <li> Contact</li>
       </ul>
       <div className='navprofile'> 
       
       <img id='carticon' onClick={(e)=> setCart(!cart)} src={icon} alt="carticon" />
       <img id='avatar' src={avatar} alt="carticon" />
       </div>
       <div className={cart? 'cartdropdn' :'hidecart'}>
          <div className='carthd'>
           <h2 className='cart'>Cart</h2>
          </div>
          <div className='cartcontainer'>
           <p className='cartcontent'>Your cart is empty.</p>
         </div>
       </div>
    </header>
    </>
  )
}

export default Nav