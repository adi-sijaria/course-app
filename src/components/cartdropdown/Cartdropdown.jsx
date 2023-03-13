import React from 'react'


import Button from '../button-component/button.component'
import { useNavigate } from 'react-router-dom'
import "./Cartdropdown.scss"
import { useSelector } from 'react-redux'
// import { ToogleContext } from '../../Context/tooglemode.context'
import { CartItem } from '../cart-item/Cart-item'
const Cartdropdown = () => {
  const cartItems=useSelector((state)=>{return state.cart.cartItems} )
  
    
   
    const navigate=useNavigate();
    const goToCheckoutHandler=()=>{
      navigate('./checkout')
    }
    

  return (

    <div className='cart-dropdown-container' >
      <div className='cart-items'>
        {cartItems.map((cartitem)=>(<CartItem key={cartitem.id} cartItem={cartitem}/>))}
        </div>
        <Button onClick={()=>goToCheckoutHandler()}>CHECKOUT</Button>
      
    </div>
  )
}

export default Cartdropdown
