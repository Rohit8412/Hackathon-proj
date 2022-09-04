import React from 'react'
import { useEffect,useRef } from 'react/cjs/react.development';
import '../Styles/contribute_card.css'

function Card(props) {
 
  const { src, title, desc } = props.obj
  var width=props.width;
  if(width==null)
  width="100%";
 
  return (
    <>
      <div className='contribute_container' style={{width:width}}>
        <div id='contribute_img_container'>
          <img src={src} alt='SOS' />
        </div>
        <div className='contribute_title'>{title}</div>
        <div className='contribute_desc'>{desc}</div>
      </div>
    </>
  )
}
export default Card
