import React from 'react'
import "./Reason.scss"

const Reason = () => {
  let box = document.querySelector('.main-container');
  // console.log(box)
  // console.log(box.clientWidth)
  const btnpressprev = () => {
    let box = document.querySelector(".main-container");
    console.log("hr")
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width)
  }
  const btnpressnext = () => {
    let box = document.querySelector(".main-container");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width)


  }

  return (
    <>
      <button className='left-side' onClick={btnpressprev}><p>&lt;</p></button>
      <button className='right-side' onClick={btnpressnext}><p>&gt;</p></button>
      <div className="main-container">
        <div className="reason-container">
          <div className='text-box'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, unde ullam! Totam omnis officiis vitae, dolorem ipsa reprehenderit repudiandae aliquid eaque cupiditate provident impedit laborum ab, magnam quibusdam eos numquam.
          </div>
          <div >
            <img src="https://tse3.mm.bing.net/th?id=OIP.hF2gORA4fRXd2riUIG4GEwHaEN&pid=Api&P=0" className="image-h" alt="" />

          </div>
        </div>
        <div className="reason-container">
          <div className='text-box'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, unde ullam! Totam omnis officiis vitae, dolorem ipsa reprehenderit repudiandae aliquid eaque cupiditate provident impedit laborum ab, magnam quibusdam eos numquam.
          </div>
          <div className="image-h">
            <img src="https://tse3.mm.bing.net/th?id=OIP.YFj_FO1rntQ60zcAXl-GrQAAAA&pid=Api&P=0" className="image-h" alt="" />

          </div>
        </div>
        <div className="reason-container ">
          <div className='text-box'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, unde ullam! Totam omnis officiis vitae, dolorem ipsa reprehenderit repudiandae aliquid eaque cupiditate provident impedit laborum ab, magnam quibusdam eos numquam.
          </div>
          <div className="image-h">
            <img src="https://tse3.mm.bing.net/th?id=OIP.e1jcITSyxHavm6kAPDRmSAHaFj&pid=Api&P=0" className="image-h" alt="" />

          </div>

        </div>
        <div className="reason-container ">
          <div className='text-box'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, unde ullam! Totam omnis officiis vitae, dolorem ipsa reprehenderit repudiandae aliquid eaque cupiditate provident impedit laborum ab, magnam quibusdam eos numquam.
          </div>
          <div className="image-h">
            <img src="https://tse3.mm.bing.net/th?id=OIP.e1jcITSyxHavm6kAPDRmSAHaFj&pid=Api&P=0" className="image-h" alt="" />

          </div>

        </div>
        <div className="reason-container ">
          <div className='text-box'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, unde ullam! Totam omnis officiis vitae, dolorem ipsa reprehenderit repudiandae aliquid eaque cupiditate provident impedit laborum ab, magnam quibusdam eos numquam.
          </div>
          <div className="image-h">
            <img src="https://tse3.mm.bing.net/th?id=OIP.e1jcITSyxHavm6kAPDRmSAHaFj&pid=Api&P=0" className="image-h" alt="" />

          </div>

        </div>
      </div>
    </>
  )
}

export default Reason
