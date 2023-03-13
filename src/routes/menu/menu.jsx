import React from 'react'
import Productcontainer from '../../components/product-container/product-container'
import { COURSE_DATA } from '../../course-data'
import "./menu.scss"
import Cart from '../cart/Cart'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Cartopenfunction } from '../../store/slices/Cartslice'
import SearchBox from '../../components/search-box.container/SeachBox'
const Menu = () => {
  const dispatch=useDispatch();
    // const data=COURSE_DATA;
    // console.log(data);
    const isCartOpen=useSelector((state)=>{return state.cart.isCartOpen})
    console.log(isCartOpen);
    const data=useSelector((state)=>{return state.product.productData})
    
  return (
    <>
    <div className='menu-div'>
     <div className='component-container' >
          
          <span className='searchbox'><SearchBox/></span>
          
          
        </div>
        </div>

    
    
    <div className='course-menu-container'>
       {data.map((course)=>{
        return(
        <Productcontainer product={course}/>
        )
       })}

      
    </div>
       <button onClick={()=>dispatch(Cartopenfunction())}>cart icon</button>
       
       {/* {isCartOpen?<Cart/>:null} */}
     

       </>
    
  )
}

export default Menu
