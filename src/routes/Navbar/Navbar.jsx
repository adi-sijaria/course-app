import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import "./Navbar.scss"
import CartIcon from '../../components/cart-icon.component/CartIcon'

const Navbar = () => {
  return (

    <>
  
        <div className='navbar' >
            <div className='logo'>
            <Link to='/' className='home'>
                    <li>
                        Home
                    </li>
                </Link>

            </div>
            <ul className='nav-links'>
                <Link to='/wishlist' className='wishlist'>
                    <li>
                        Wishlist
                        
                    </li>
                </Link>
                 <Link to='/menu' className='menu'>
                    <li>
                        Course
                    </li>
                </Link>
                <CartIcon 
                />
                
            </ul>
            {/* <CartItem/> */}

        
        </div>
        <Outlet/>
        </>
        
        
      
    
  )
}

export default Navbar
