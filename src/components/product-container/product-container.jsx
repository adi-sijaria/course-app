import React from 'react'
import { COURSE_DATA } from '../../course-data'
import "./product-container.scss"
import { useDispatch } from 'react-redux'
import { addTocart } from '../../store/slices/Cartslice'
import { BsFillBookmarksFill } from "react-icons/bs";
import { addToWishlist } from '../../store/slices/Wishlistslice'
import Button from '../button-component/button.component'
import { useState } from 'react'



const Productcontainer = ({ product }) => {
    const [Toogle, setTooglemode] = useState('false')
    const dispatch = useDispatch();
    const { name, duration, starts, price, imagepath } = product
    const addTOCART = (payload) => {
        dispatch(addTocart(payload));
        console.log(payload)

    }
    const addTowishlist = (payload) => {
        dispatch(addToWishlist(payload), setTooglemode(!Toogle));

    }
    return (


        <div className="product-card" >
            <div className='image-container'>
                <img src={imagepath} className="image-holder" alt={`${name}`} />
                <BsFillBookmarksFill color={Toogle ? "white" : "red"} size={30} className='wish-button' onClick={() => addTowishlist(product)}
                />
            </div>

            <div className="details">
                <h1 className='name-holder'> {name}<br />({price}$)
                </h1>
                <br />
                <h3 style={{ textAlign: 'center' }} className="detail-child" ><i>duration : </i>{duration}</h3>
                <h3 style={{ textAlign: 'center' }} className="detail-child" >starts :{starts}</h3>
                <div className="button-c">
                    <Button onClick={() => addTOCART(product)} >ADD TO CART</Button>



                </div>
            </div >
            


        </div>

    )
}

export default Productcontainer
