import React from 'react'
import './Wishlist.scss'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Productcontainer from '../../components/product-container/product-container'


const Wishlist = () => {
  console.log("hi");
    let wishdata=useSelector((state)=>{return state.wishlist.UserwishlistData});
    console.log(wishdata)
    
    console.log("hi")
  return (
    <div className='wishlist-container'>
        <div className='tag'>
            <h1 >we take care of your choices and dreams</h1>
        </div>
        <div className='wishlist-menu-container'>
            {wishdata.map((data)=>{
                return <Productcontainer product={data}/>
                
            })}
      </div>
    </div>
  )
}

export default Wishlist
