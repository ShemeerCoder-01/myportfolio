"use client"
import React, { useEffect, useState } from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function BacktoTop() {

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className='upwardIcon  flex justify-center items-center fixed right-6 bottom-10 cursor-pointer text-navy rounded-full p-1 border border-solid border-black hover:text-white hover:bg-navy' style={{display: showButton ? 'flex' : 'none' }}>
      <ArrowUpwardRoundedIcon onClick={() => topFunction()} />
    </div>
  )
}

export default BacktoTop;