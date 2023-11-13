"use client"
import React, { useEffect, useState } from 'react'
// import './style.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

function Header() {
    const [theme,setTheme] = useState('');
  
    useEffect(()=>{
      let themeColor = localStorage.getItem('themer');
      if(themeColor === "dark"){
        setDark();
      }
      else{
        setLight();
      }
    },[theme]);
  
    const setDark = ()=>{
      localStorage.setItem('themer',"dark");
      setTheme('dark');
      document.documentElement.setAttribute('data-theme',"dark");
    }
  
    const setLight = ()=>{
      localStorage.setItem('themer',"light");
      setTheme("light");
      document.documentElement.setAttribute('data-theme',"light");
    }
  
    const handleClick = ()=>{
      if(localStorage.getItem('themer')){
        let themeData = localStorage.getItem('themer');
        if(themeData === 'dark'){
          setLight();
        }
        else{
          setDark();
        }
      }
    }
  
    const scrollFunction = (tab) => {
      switch (tab) {
        case "Education":
          document.body.scrollBy(0,550)
          document.documentElement.scrollBy(0,550);
          break;
        case "Skills":
          document.body.scrollBy(0,930)
          document.documentElement.scrollBy(0,930)
          break;
        case "Projects":
          document.body.scrollBy(0,1480)
          document.documentElement.scrollBy(0,1480)
          break;
        case "Contact":
          document.body.scrollBy(0,2000)
          document.documentElement.scrollBy(0,2000)
          break;
        default:
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
      }
    }
  
    return (
      <div className='header flex justify-around items-center px-2 py-8'>
        <h1 className='text-2xl font-semibold cursor-pointer'>Shemeer.</h1>
        <div className='header-links flex gap-4 items-center'>
          <p className='cursor-pointer font-medium' onClick={() => scrollFunction("Education")}>Education</p>
          <p className='cursor-pointer font-medium' onClick={() => scrollFunction("Skills")}>Skills</p>
          <p className='cursor-pointer font-medium' onClick={() => scrollFunction("Projects")}>Projects</p>
          <p className='cursor-pointer font-medium' onClick={() => scrollFunction("Contact")}>Contact</p>
        </div>
        {theme === 'light' ? <WbSunnyOutlinedIcon onClick={() => handleClick()} className='sun' /> : <DarkModeOutlinedIcon onClick={() => handleClick()} className="moon" />}
  
      </div>
    )
  }
  
  export default Header