import React from 'react'
import "./Home.scss"
import Reason from '../../components/home.reasons.component/Reason'
import Bluebox from '../../components/home-blue-box.component/Bluebox'
import MiniNav from '../../components/mini-nav.component/MiniNav'
import { AiFillApple } from "react-icons/ai"
import { AiFillAndroid } from "react-icons/ai"
import { AiOutlineArrowRight} from "react-icons/ai"
import "./Home.scss"
const Home = () => {
  return (
    <>
    <div className='Home'>
      
      
        <div className='top'>
          <div className="poster">
            <img className='image-p' src="https://tse4.mm.bing.net/th?id=OIP.tKyl2J_CIE7daE8B_LLKvQHaHZ&pid=Api&P=0" />
          </div>
          <div className='text'>
            <h1>Skill It... Win It</h1>
            <h3> From any part of the world with a smartphone<br />,your dreams are our motivation</h3>

            <div className='os-icons'>
              <AiFillApple size={70} className='icon' />
              <AiFillAndroid size={70} className='icon' />
            </div>
          </div>
          
        </div>
        {/* <div className='image-2'> */}
            {/* <img className='desk-photo' src="https://tse1.explicit.bing.net/th?id=OIP.hXfAdfTjfra5usVwZQN21AHaB6&pid=Api&P=0"/> */}
            <button  className="button-course" > explore courses <AiOutlineArrowRight/></button>


          {/* </div> */}
    </div>
    <Bluebox/>
    </>
  )
}

export default Home
