import React from 'react'
import { COURSE_DATA } from '../../course-data'
import "./product-container.scss"
import { useDispatch } from 'react-redux'
import { addTocart } from '../../store/slices/Cartslice'
import {    BsBookmark} from "react-icons/bs";
import { addToWishlist } from '../../store/slices/Wishlistslice'
import Button from '../button-component/button.component'


const Productcontainer = ({product}) => {
    const dispatch=useDispatch();
    const {name,duration,starts,price,imagepath}=product
    const addTOCART=(payload)=>{
        dispatch(addTocart(payload));
        console.log(payload)

    }
    const addTowishlist=(payload)=>{
        dispatch(addToWishlist(payload));

    }
  return (
   
    <div className="product-card" >
        <div className='image-container'>
        <img src={imagepath} className="image-holder" alt={`${name}`} />
        </div>
            
            <div className="details">
                <h1 className='name-holder'> {name}({price}$)
                </h1>
                <br/>
                <h3 style={{textAlign:'center'}} ><i>duration : </i>{duration}</h3>
                <h3 style={{textAlign:'center'}} >starts :{starts}</h3>
                <div className="button-c">
                    <Button onClick={()=>addTOCART(product)} >ADD TO CART</Button>
                 


                </div>
            </div >
            <div>

            <BsBookmark className='wish-button' onClick={()=>addTowishlist(product)}
                />
            </div>
                
                
        </div>
  )
}

export default Productcontainer
