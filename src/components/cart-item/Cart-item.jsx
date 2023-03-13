import './Cart-item.scss'
import React from 'react'

export const CartItem = ({cartItem}) => {
  const {name,cartQuantity,imagepath,price}=cartItem;

  return (
    <div className='cart-item-container'>
      <div className='image-holder'>
        <img className="image-holder"src={imagepath} alt={`${name}`}/>
        </div>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{cartQuantity} *${price}</span>
        </div>
    </div>
  )
}

