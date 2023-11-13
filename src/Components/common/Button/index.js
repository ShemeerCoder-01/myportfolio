"use client"
import React, { useState } from 'react'
import './style.css'
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function Button() {

  const [state,setState] = useState(false);



  const contactMe = ()=>{
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if(isMobileDevice){
      setState(true);
    }

  }

  
  return (
    <div className='button' onClick={contactMe}>
      {state?(<a href={'tel:+918891640607'}>
        <button className='btn'>Contact Me <SendRoundedIcon className='arrowIcon'/></button>
      </a>):(<a href={'mailto:shameerbem@gmail.com'}> 
        <button className='btn'>Contact Me <SendRoundedIcon className='arrowIcon'/></button>
      </a>)}
        
    </div>
  )
}

export default Button;