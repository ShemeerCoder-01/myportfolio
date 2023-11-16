"use client"
import React, { useState } from 'react'
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
        <button className='flex gap-2 justify-start items-center border-none outline-none font-medium lg:font-semibold text-sm lg:text-lg px-3 lg:px-4 py-2 lg:py-3 rounded-lg cursor-pointer min-w-max bg-navy text-black'>Contact Me <SendRoundedIcon className='text-lg text-white'/></button>
      </a>):(<a className='no-underline' href={'mailto:shameerbem@gmail.com'}> 
        <button className='flex gap-2 justify-start items-center border-none outline-none font-medium lg:font-semibold text-sm lg:text-lg px-3 lg:px-4 py-2 lg:py-3 rounded-lg cursor-pointer min-w-max bg-navy text-black'>Contact Me <SendRoundedIcon className='text-lg text-white'/></button>
      </a>)}
        
    </div>
  )
}

export default Button;