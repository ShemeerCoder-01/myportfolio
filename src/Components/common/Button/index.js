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
      {state?(<a className='no-underline' href={'tel:+918891640607'}>
        <button className='btn flex gap-2 justify-start items-center border-none outline-none font-medium lg:font-semibold text-sm lg:text-lg px-3 lg:px-4 py-2 lg:py-3 rounded-lg cursor-pointer min-w-max'>Contact Me <SendRoundedIcon className='arrowIcon text-lg'/></button>
      </a>):(<a className='no-underline' href={'mailto:shameerbem@gmail.com'}> 
        <button className='btn flex gap-2 justify-start items-center border-none outline-none font-medium lg:font-semibold text-sm lg:text-lg px-3 lg:px-4 py-2 lg:py-3 rounded-lg cursor-pointer min-w-max'>Contact Me <SendRoundedIcon className='arrowIcon text-lg'/></button>
      </a>)}
        
    </div>
  )
}

export default Button;