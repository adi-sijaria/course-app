import React from 'react'
import "./Cart.scss"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/slices/Cartslice'
import { SubtractFromCart } from '../../store/slices/Cartslice'
import { useEffect } from 'react'
import { Cartcountfunction } from '../../store/slices/Cartslice'
import { cartTotalfunction } from '../../store/slices/Cartslice'
import { addTocart } from '../../store/slices/Cartslice'
const Cart = () => {
    const dispatch=useDispatch();
    const data=useSelector((state)=>{
        return state.cart.cartItems
    })
    useEffect(()=>
    {dispatch(Cartcountfunction())},
    [data])
    const cartCount=useSelector((state)=>{ return state.cart.cartCount})

    useEffect(()=>
    {dispatch(cartTotalfunction())},
    [data])
    
    const cartTotal=useSelector((state)=>{ return state.cart.cartTotal})
    


    console.log(data);
    const RemoveFromCart=(id)=>{
        dispatch(removeFromCart(id));
        

    }
    const Subtractfromcart=(payload)=>{
        dispatch(SubtractFromCart(payload))

    }
    const AddToCart=(payload)=>{
        dispatch(addTocart(payload))

    }


  return (
    <div>
        {data.map((data,id)=>{
            const {name,duration,price,cartQuantity,imagepath}=data;
            return(
                <>
                
                <div className='checkout-item-container'>
      <div className='image-container5'>
        <img src={imagepath} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => Subtractfromcart(data)}>
          &#10094;
        </div>
        <span className='value'>{cartQuantity}</span>
        <div className='arrow' onClick={() => AddToCart(data)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}$</span>
      <div className='remove-button' onClick={() => RemoveFromCart(id)}>&#10005;</div>
    </div>

                
                


</>
                
            )
        })}
        <div className='end-details'>
        <h1>total items {cartCount}</h1>
        <h1>cart total {cartTotal} RS</h1>
        </div>
    </div>
  )
}

export default Cart
