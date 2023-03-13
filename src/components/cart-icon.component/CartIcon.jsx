import React from 'react'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cartIcon.scss";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Cartcountfunction } from '../../store/slices/Cartslice'
import { cartTotalfunction } from '../../store/slices/Cartslice'
import { useSelector } from 'react-redux';
import { Cartopenfunction } from '../../store/slices/Cartslice';
import Cartdropdown from '../cartdropdown/Cartdropdown';
const CartIcon = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>{
    return state.cart.cartItems
})
  
  useEffect(()=>
    {dispatch(Cartcountfunction())},
    [data])
    const cartCount=useSelector((state)=>{ return state.cart.cartCount})

const isCartOpen=useSelector((state)=>{return state.cart.isCartOpen})
console.log(isCartOpen);
    
  return (
    
    


    <div>
        <div className='cart-icon-container' onClick={()=>dispatch(Cartopenfunction())}  >
            <ShoppingIcon className='shopping-icon'/>
        
            <div className='item-count'>{cartCount}</div>
        </div>
        {isCartOpen?<Cartdropdown/>:null}

        
      
    </div>
  )
}

export default CartIcon
