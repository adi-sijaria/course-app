import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FilterthroughSearch } from '../../store/slices/Productslice'
import { IoIosSearch } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { CancelButtonfunction } from '../../store/slices/Productslice';
import "./SearchBox.scss"
const SearchBox = () => {
  const [inputData, setInputData] = useState('')
    const dispatch=useDispatch();
    const filtersearch=(payload)=>{
        dispatch(FilterthroughSearch(payload));
        

    }
    // const CancelButton=(payload)=>{
    //   dispatch(CancelButtonfunction(payload))


    // }
    
  return (
    <div>
        <input placeholder='Search Course' className='search-box' value={inputData} onChange={(event)=>setInputData(event.target.value)} >
          
        </input>
        <MdCancel onClick={()=>dispatch(CancelButtonfunction(),setInputData(''))} className='cancel-button'/>
        <i className='fa-fa-search' onClick={()=>filtersearch(inputData)}><IoIosSearch/></i>
      
    </div>
  )
}

export default SearchBox
