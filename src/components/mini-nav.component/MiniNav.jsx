import React from 'react'
import "./MiniNav.scss"
import { Link } from 'react-router-dom'
const MiniNav = () => {
  return (
    <div className='mini-nav-container'>
        <div className='box'>
        <Link to='/menu' className='menu'>
                    <li>
                        Course
                    </li>
        </Link>
            

        </div>
        <div className='box'>
        <Link to='/menu' className='menu'>
                    <li>
                        Course
                    </li>
        </Link>
            

        </div>
        <div className='box'>
        <Link to='/menu' className='menu'>
                    <li>
                        Course
                    </li>
        </Link>
            

        </div>

      
    </div>
  )
}

export default MiniNav
